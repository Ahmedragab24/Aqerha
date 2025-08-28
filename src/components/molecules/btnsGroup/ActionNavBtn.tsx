import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import UserAdditionsBtn from "@/components/atoms/buttons/UserAdditionsBtn";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import UserOrdersBtn from "@/components/atoms/buttons/UserOrdersBtn";
import { Button } from "@/components/ui/button";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";
import Notifications from "@/components/organisms/notifications/Notifications";
import ConversationBtn from "@/components/atoms/buttons/ConversationBtn";

interface Props {
  isScrolled: boolean;
  navbarBg: boolean;
  userType: MembershipType | ServicesProvidersType;
}

const ActionNavBtn = ({ isScrolled, navbarBg, userType }: Props) => {
  const token = getAuthTokenClient();

  return (
    <div className="flex items-center gap-2 md:gap-6">
      {token &&
        (userType === "auction_companies" ||
          userType === "real_estate_developer" ||
          userType === "agent") && (
          <Tooltip>
            <TooltipTrigger>
              <UserAdditionsBtn isScrolled={isScrolled} navbarBg={navbarBg} />
            </TooltipTrigger>
            <TooltipContent>
              <p>إضافة جديدة</p>
            </TooltipContent>
          </Tooltip>
        )}

      {token &&
        (userType === "evaluator" ||
          userType === "inspector" ||
          userType === "company_agent") && (
          <Tooltip>
            <TooltipTrigger>
              <UserOrdersBtn
                userType={userType}
                isScrolled={isScrolled}
                navbarBg={navbarBg}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>الطلبات</p>
            </TooltipContent>
          </Tooltip>
        )}

      <Tooltip>
        <TooltipTrigger>
          {token ? (
            <Button variant={"noneBg"} className="relative !p-0 !m-0">
              <Link href={"/favorites"}>
                <Heart
                  className={`fill-primary text-primary !w-6 !h-6 ${
                    isScrolled || navbarBg
                      ? "text-foreground fill-primary"
                      : "text-primary-light fill-primary-light"
                  }`}
                />
              </Link>
            </Button>
          ) : (
            <RegisterDialog>
              <Button variant={"noneBg"} className="relative !p-0 !m-0">
                <Heart
                  className={`fill-primary text-primary !w-6 !h-6 ${
                    isScrolled || navbarBg
                      ? "text-foreground fill-primary"
                      : "text-primary-light fill-primary-light"
                  }`}
                />
              </Button>
            </RegisterDialog>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>المفضلة</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Notifications isScrolled={isScrolled} navbarBg={navbarBg} />
        </TooltipTrigger>
        <TooltipContent>
          <p>الإشعارات</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <ConversationBtn isScrolled={isScrolled} navbarBg={navbarBg} />
        </TooltipTrigger>
        <TooltipContent>
          <p>المحادثات</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ActionNavBtn;
