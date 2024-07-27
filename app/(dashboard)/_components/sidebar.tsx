import { ExternalLink, Mail, MoreVertical, Pencil } from "lucide-react";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm dark:bg-medium">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
      <div className="mt-auto flex items-center gap-x-2 text-slate-500 text-sm font-semibold pl-6 transition-all border p-6 dark:text-white">
        &copy; 2024 All rigthts... LearnSync360
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="right">
            <Link href="mailto:yemalindev2002@gmail.com">
              <DropdownMenuItem>
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </DropdownMenuItem>
            </Link>
            <Link href={`/`}>
              <DropdownMenuItem>
                <ExternalLink className="h-4 w-4 mr-2" />
                Conditions d&apos;utilisation
              </DropdownMenuItem>
            </Link>
            <Link href={`/`}>
              <DropdownMenuItem>
                <ExternalLink className="h-4 w-4 mr-2" />
                Politique de Confidentialité
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
