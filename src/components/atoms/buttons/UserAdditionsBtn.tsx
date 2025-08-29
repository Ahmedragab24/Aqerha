import UserAdditionsDialog from "@/components/organisms/Popups/UserAdditionsDialog";
import { Button } from "@/components/ui/button";
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
      <TooltipTrigger asChild>
        <UserAdditionsDialog>
          <Button
            variant={"noneBg"}
            className="relative !p-0 !m-0"
            suppressHydrationWarning
          >
            <CirclePlus
              className={`text-primary !w-6 !h-6 ${
                isScrolled || navbarBg
                  ? "text-foreground fill-primary/80"
                  : "!text-primary !fill-[#518535]"
              }`}
            />
          </Button>
        </UserAdditionsDialog>
      </TooltipTrigger>
      <TooltipContent>
        <p>إضافة جديدة</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default UserAdditionsBtn;
