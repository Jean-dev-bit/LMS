import { db } from "@/lib/db.ts";
import { stripe } from "@/lib/stripe.ts";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
      return new NextResponse("Non autorisé", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        isPublished: true,
      },
    });

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: params.courseId,
        },
      },
    });

    if (purchase) {
      return new NextResponse("Vous avez déjà acheté ce cours", {
        status: 400,
      });
    }
    if (!course) {
      return new NextResponse("Ce cours n'existe pas", { status: 404 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "XOF",
          product_data: {
            name: course.title,
            description: course.description!,
          },
          //J'ai supprimé les *100 ! avec XOF on ne convertit pas en centimes
          unit_amount: Math.round(course.price!),
        },
      },
    ];

    let payementCustomer = await db.payementCustomer.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        payementCustomerId: true,
      },
    });

    if (!payementCustomer) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
      });

      payementCustomer = await db.payementCustomer.create({
        data: {
          userId: user.id,
          payementCustomerId: customer.id,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: payementCustomer.payementCustomerId,
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?canceled=1`,
      metadata: {
        courseId: course.id,
        userId: user.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("[COURSSE_ID_CHECKOUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
