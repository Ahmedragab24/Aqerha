"use client";

import PropertyChatApp from "@/components/templates/MessagesSections";
import { Button } from "@/components/ui/button";
import { useGetAllChatsQuery } from "@/store/services/Chats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ConversationsPage = () => {
  const { data, isLoading, error } = useGetAllChatsQuery();
  const chats = React.useMemo(() => data?.chats || [], [data?.chats]);
  const [selectedChatId, setSelectedChatId] = React.useState<number | null>(
    null
  );
  const [currentUserId, setCurrentUserId] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (chats.length > 0 && !selectedChatId) {
      setSelectedChatId(chats[0].id);
      setCurrentUserId(chats[0].peer_user.id);
    }
  }, [chats, selectedChatId]);

  if (isLoading) {
    return (
      <main className="Container pt-28 mb-16">
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">جاري تحميل المحادثات...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="Container pt-28 mb-16">
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <p className="text-red-500 mb-4">حدث خطأ في تحميل المحادثات</p>
            <Button onClick={() => window.location.reload()}>
              إعادة المحاولة
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-4 lg:space-y-16">
        {chats && chats.length > 0 ? (
          <>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <h1 className="text-2xl font-bold">المحادثات</h1>
              <div className="flex items-center gap-4">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-sm border-none"
                >
                  <Image
                    src="/Icons/Icon.svg"
                    alt="chat"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </div>

            <PropertyChatApp
              selectedChatId={selectedChatId || undefined}
              setSelectedChatId={setSelectedChatId}
              currentUserId={currentUserId || undefined}
              setCurrentUserId={setCurrentUserId}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6 h-[80vh]">
            <Image
              src="/Images/Frame 1261153564.png"
              alt="Conversations"
              width={700}
              height={700}
            />

            <h3 className="text-2xl font-semibold">المحادثات</h3>
            <p className="text-lg text-gray-500 text-center max-w-md">
              ابدأ محادثتك الأولى الآن! تتيح لك ميزة المحادثات سهولة التواصل
              المباشر مع المالكين والمتقدمين، مما يساعدك على تبادل المعلومات
              بسرعة وبسلاسة.
            </p>

            <Button className="!h-12 w-full md:w-[20%]">
              <Link href="/">الصفحة الرئيسية</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ConversationsPage;
