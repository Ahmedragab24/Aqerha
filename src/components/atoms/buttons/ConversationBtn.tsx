"use client";

import { Button } from "@/components/ui/button";
import { useGetUnReadCountQuery } from "@/store/services/Chats";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";
import React from "react";
import NumberCountBadge from "../badges/NumberCountBadge";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";

interface Props {
  isScrolled: boolean;
  navbarBg: boolean;
}

const ConversationBtn = ({ isScrolled, navbarBg }: Props) => {
  const { data } = useGetUnReadCountQuery();
  const unreadCount = data?.data?.unread_chats_count;
  const token = getAuthTokenClient();

  return (
    <div className="relative">
      {token ? (
        <Button variant={"noneBg"} className="relative !p-0 !m-0">
          <Link href={"/conversations"}>
            <MessageSquareText
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
          <MessageSquareText
            className={`fill-primary text-primary !w-6 !h-6 ${
              isScrolled || navbarBg
                ? "text-foreground fill-primary"
                : "text-primary-light fill-primary-light"
            }`}
          />
        </Button>
      )}

      <NumberCountBadge count={unreadCount || 0} />
    </div>
  );
};

export default ConversationBtn;
