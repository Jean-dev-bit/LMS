"use client";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import MuxPlayer from "@mux/mux-player-react";

import { Pencil, PlusCircle, Video } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Chapter, MuxData } from "@prisma/client";

import { FileUpload } from "@/components/file-upload";

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values
      );
      toast.success("Le chapitre est mis à jour");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong !");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4 dark:bg-medium">
      <div className="font-medium flex items-center justify-between dark:text-white">
        Vidéo du cours
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Annuler</>}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Ajouter une vidéo
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Modifier la vidéo
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <Video className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer playbackId={initialData?.muxData?.playbackId || ""} />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4 font-bold dark:text-white">
            Télécharger la vidéo de ce chapitre
          </div>
        </div>
      )}

      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2 dark:text-white">
          Le traitement des vidéos peut prendre quelques minutes. Actualisez la
          page si la vidéo n&apos;apparaît pas.
        </div>
      )}
    </div>
  );
};
