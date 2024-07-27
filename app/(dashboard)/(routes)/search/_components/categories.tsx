"use client";

import { Category } from "@prisma/client";

import {
  FcShop,
  FcSmartphoneTablet,
  FcBusiness,
  FcCollaboration,
  FcMindMap,
  FcWiFiLogo,
  FcMoneyTransfer,
} from "react-icons/fc";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Intelligence Artificielle": FcMindMap,
  "Réseaux & Télécommunications": FcWiFiLogo,
  "Comptabilité": FcMoneyTransfer,
  "Commerce digital": FcShop,
  "Graphisme": FcCollaboration,
  "Programmation informatique": FcSmartphoneTablet,
  "Entrepreneuriat digital": FcBusiness,
};
export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
