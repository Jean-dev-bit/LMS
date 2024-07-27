"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils.ts";

import { Chapter } from "@prisma/client";
import { Editor } from "@/components/editor";

import { Preview } from "@/components/preview";

const formSchema = z.object({
  description: z.string().min(1),
});

export const ProblemsDescriptionForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: { description: initialData?.description || "" },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // await axios.patch(
        // `/api/courses/${courseId}/chapters/${chapterId}`,
        // values
      // );
      toast.success("Le chapitre est mis à jour");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong !");
    }
  };
  return (
    //margin-top 6 normalement mais j'ai mis 1 pour des raisons valables
    <div className="mt-1 p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white">
                  Quels sont les détails de votre problème ?
                  <FormDescription className="dark:text-white mb-8">
                    Présentez le problème et développez ce que vous mettez dans
                    le titre. Minimum 20 caractères.
                  </FormDescription>
                </FormLabel>
                <FormControl>
                  <Editor {...field}  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
