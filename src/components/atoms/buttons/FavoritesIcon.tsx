import React from "react";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import { getAuthTokenClient } from "@/lib/auth/auth-client";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const FavoritesIcon = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const token = getAuthTokenClient();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {token ? (
            <Link href={"/favorites"}>
              <Heart
                className={`fill-primary text-primary !w-6 !h-6 ${
                  isScrolled || navbarBg
                    ? "text-foreground fill-primary"
                    : "!text-primary !fill-primary"
                }`}
              />
            </Link>
          ) : (
            <RegisterDialog>
              <Heart
                className={`fill-primary text-primary !w-6 !h-6 ${
                  isScrolled || navbarBg
                    ? "text-foreground fill-primary"
                    : "!text-primary !fill-primary"
                }`}
              />
            </RegisterDialog>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>المفضلة</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FavoritesIcon;
