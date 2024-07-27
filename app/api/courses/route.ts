import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher.ts";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const isAuthorized = isTeacher(userId);

    const { title } = await req.json();

    if (!userId || !isAuthorized) {
      return new NextResponse("Non autorisé", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
