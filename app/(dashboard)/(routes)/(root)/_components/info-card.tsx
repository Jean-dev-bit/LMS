import { IconBadge } from "@/components/icon-badge.tsx";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  numberOfItems,
  variant,
  label,
  icon: Icon,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3 dark:bg-medium">
      <IconBadge variant={variant} icon={Icon} />

      <div>
        <p className="font-medium">
            {label}
        </p>
        <p className="text-gray-500 text-sm dark:text-white">
            {numberOfItems}{" "}
            {numberOfItems === 1? "Cours " : "Cours"}
        </p>
      </div>
    </div>
  );
};
