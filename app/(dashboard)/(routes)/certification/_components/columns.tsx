"use client";

import { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Download, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { CourseProgress } from "@/components/course-progress.tsx";

const handleDownloadCertificate = async () => {
  try {
    const response = await fetch(`/`);
    if (!response.ok) {
      throw new Error("Échec du téléchargement du certificat");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "certificat.pdf");
    // a.download = `certificat_${userId}_${courseId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Erreur lors du téléchargement du certificat :", error);
  } finally {
  }
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cours suivis
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Inscription
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div>
          {new Date(
            row.getValue("createdAt") || new Date().toISOString()
          ).toLocaleDateString("fr-BJ", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "userProgress",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Progression
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const userProgress = (row.getValue("userProgress") as number) || 100;
      return (
        <div className="items-center w-28">
          <CourseProgress value={userProgress} size="sm" />
        </div>
      );
    },
  },
  {
    // Je viens d'ajouter Certificats comme dernière colonne
    accessorKey: "certification",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Certificats
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-4 w-8 p-0"
              onClick={handleDownloadCertificate}
            >
              <p className="flex justify-between gap-2 items-center">
                <Download className="h-4 w-4" />
                Obtenir votre certificat
              </p>
            </Button>
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent align="end">
            <Link href={`/teacher/courses/${id}`}>
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Modifier
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent> */}
        </DropdownMenu>
      );
    },
  },
];
