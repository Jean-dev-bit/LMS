"use client";

import {
  BarChart,
  Code,
  Compass,
  HelpCircle,
  Layout,
  List,
  Mail,
  Trophy,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Tableau de bord",
    href: "/",
  },
  {
    icon: Compass,
    label: "Parcourir",
    href: "/search",
  },
  // J'ai ajouté 4 nouveaux modules
  {
    icon: Trophy,
    label: "Certification",
    href: "/certification",
  },
  {
    icon: Code,
    label: "Problèmes",
    href: "/message",
  },
  {
    icon: Mail,
    label: "Newsletter",
    href: "/news",
  },
  {
    icon: HelpCircle,
    label: "FAQs",
    href: "/faqs",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Cours",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Données Analytiques",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
