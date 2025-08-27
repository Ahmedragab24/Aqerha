import Link from "next/link";
import Logo from "../atoms/images/Logo";
import NavMenu from "../molecules/menus/NavMenu";
import Notifications from "../organisms/notifications/Notifications";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import AuthNav from "../templates/AuthNav";
import UserAdditionsBtn from "../atoms/buttons/UserAdditionsBtn";
import { Button } from "../ui/button";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { showFailedToast } from "../Error&NotFound/FailedToast";
import { useGetProfileQuery } from "@/store/services/Profile";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import UserOrdersBtn from "../atoms/buttons/UserOrdersBtn";
import { useEffect, useState } from "react";
import ConversationBtn from "../atoms/buttons/ConversationBtn";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavLargeScreen = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const token = getAuthTokenClient();
  const { data } = useGetProfileQuery();
  const [mounted, setMounted] = useState(false);
  const userType = data?.data?.membership_type as
    | MembershipType
    | ServicesProvidersType;

  console.log(userType, "userType");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className="Container hidden md:flex justify-between"
      suppressHydrationWarning
    >
      {/* LOGO & MENU */}
      <div className="flex items-center gap-6">
        <Logo isScrolled={isScrolled} navbarBg={navbarBg} />
        <NavMenu isScrolled={isScrolled} navbarBg={navbarBg} />
      </div>

      {/* ACTION BTN */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          {token &&
            (userType === "auction_companies" ||
              userType === "real_estate_developer" ||
              userType === "agent") && (
              <Tooltip>
                <TooltipTrigger>
                  <UserAdditionsBtn
                    isScrolled={isScrolled}
                    navbarBg={navbarBg}
                  />
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
                <Button
                  variant={"noneBg"}
                  className="relative !p-0 !m-0"
                  onClick={() => {
                    showFailedToast({
                      title: "يرجى تسجيل الدخول أولاً",
                    });
                  }}
                >
                  <Heart
                    className={`fill-primary text-primary !w-6 !h-6 ${
                      isScrolled || navbarBg
                        ? "text-foreground fill-primary"
                        : "text-primary-light fill-primary-light"
                    }`}
                  />
                </Button>
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

        <AuthNav />
      </div>
    </nav>
  );
};

export default NavLargeScreen;
