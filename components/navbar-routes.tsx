"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button.tsx";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { SearchInput } from "./search-input";

import { isTeacher } from "@/lib/teacher.ts";
import { ThemeSwitcher } from "./providers/theme-switcher";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");

  const isSearchPage = pathname === "/search";
  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Fermer
            </Button>
          </Link>
        ) : // Bloquer l'accès à tout le monde de pouvoir créer des cours
        isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Espace Enseignant
            </Button>
          </Link>
        ) : null}
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
