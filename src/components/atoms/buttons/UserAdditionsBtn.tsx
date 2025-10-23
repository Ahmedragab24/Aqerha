import UserAdditionsDialog from "@/components/organisms/Popups/UserAdditionsDialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CirclePlus } from "lucide-react";
import React from "react";

interface UserAdditionsBtnProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const UserAdditionsBtn = ({ isScrolled, navbarBg }: UserAdditionsBtnProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <UserAdditionsDialog>
          <CirclePlus
            className={`text-primary !w-6 !h-6 ${
              isScrolled || navbarBg
                ? "text-foreground fill-primary/80"
                : "!text-primary !fill-[#518535]"
            }`}
          />
        </UserAdditionsDialog>
      </TooltipTrigger>
      <TooltipContent>
        <p>إضافة جديدة</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default UserAdditionsBtn;
