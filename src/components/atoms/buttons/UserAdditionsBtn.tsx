import UserAdditionsDialog from "@/components/organisms/Popups/UserAdditionsDialog";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React from "react";

interface UserAdditionsBtnProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const UserAdditionsBtn = ({ isScrolled, navbarBg }: UserAdditionsBtnProps) => {
  return (
    <UserAdditionsDialog>
      <Button
        variant={"noneBg"}
        className="relative !p-0 !m-0"
        suppressHydrationWarning
      >
        <CirclePlus
          className={`text-primary !w-6 !h-6 ${
            isScrolled || navbarBg ? "text-foreground " : "text-primary-light"
          }`}
        />
      </Button>
    </UserAdditionsDialog>
  );
};

export default UserAdditionsBtn;
