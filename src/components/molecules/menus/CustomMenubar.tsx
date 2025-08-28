"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuType } from "@/constants/navMenu";
import Link from "next/link";

interface CustomDropdownProps {
  Trigger: string;
  Items: MenuType[];
  className?: string;
  setOpen: (value: boolean) => void;
}

const CustomDropdown = ({
  Trigger,
  Items,
  className,
  setOpen,
}: CustomDropdownProps) => {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger
        className={`px-3 py-2 rounded-md border bg-white shadow-sm text-sm font-medium hover:bg-gray-100 ${className}`}
      >
        {Trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        {Items.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            onClick={() => setOpen(false)}
          >
            <DropdownMenuItem>{item.label}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;
