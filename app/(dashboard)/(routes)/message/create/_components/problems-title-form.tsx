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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Champ obligatoire",
  }),
});

export const ProblemsForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: "",
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Félicitations ! Nouvelle mise à jour");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong !");
    }
  };
  return (
    //  bg-slate-100 rounded-md
    <div className="mt-6 p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                  <FormDescription className="dark:text-white mb-8">
                    Soyez précis et imaginez que vous posez une question à une
                    autre personne.
                  </FormDescription>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="ex : Existe-t-il une fonction R pour trouver l'indice d'un élément dans un vecteur ?"
                    className="w-full"
                    {...field}
                  />
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
