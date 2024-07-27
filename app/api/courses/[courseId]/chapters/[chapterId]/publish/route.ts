import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: {
      courseId: string;
      chapterId: string;
    };
  }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Non autorisé", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: { id: params.courseId, userId },
    });

    if (!courseOwner) {
      return new NextResponse("Non autorisé", { status: 401 });
    }

    const chapter = await db.chapter.findUnique({
      where: { id: params.courseId, courseId: params.courseId },
    });

    const muxData = await db.muxData.findUnique({
      where: {
        chapterId: params.chapterId,
      },
    });
    //VERIFICATION DES FIELDS

    // if (
    //   !chapter ||
    //   !muxData ||
    //   !chapter.title ||
    //   !chapter.description ||
    //   !chapter.videoUrl
    // ) {
    //   return new NextResponse("Champs obligatoires manquants", { status: 400 });
    // }

    // FIN DES VERIFICATIONS

    const publishedChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: true,
      },
    });
    return NextResponse.json(publishedChapter);
  } catch (error) {
    console.log("[CHAPTER_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
