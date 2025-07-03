"use client";

import Casser from "@/components/atoms/badges/Casser";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import CustomSelect from "@/components/molecules/selects/CustomSelect";
import PropertyChatApp from "@/components/templates/MessagesSections";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

// Mock data structure
interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: "text" | "media" | "voice";
}

interface Person {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isOnline?: boolean;
}

interface Property {
  id: string;
  title: string;
  image: string;
  year: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status: "active" | "inactive";
  size: number;
  listingType: string;
  price: number;
  currency: string;
  description: string;
  repairQuality: "new" | "old";
  livingSpace: number;
}

const mockPeople: Person[] = [
  {
    id: "1",
    name: "علي سلامة",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage:
      "مرحبا أحمد، أنا مهتم بعقارك، يرجى إرسال تفاصيل أكثر عن العقار",
    timestamp: "منذ 5 دقائق",
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: "2",
    name: "ويلسون سبيتيموس",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "مرحبا بك! أنا أبحث عن شقة في منطقة وسط البلد",
    timestamp: "الأمس",
    isOnline: false,
  },
  {
    id: "3",
    name: "فيليب الهادئ",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "مرحبا! أريد أن أعرف المزيد عن هذا العقار",
    timestamp: "منذ 3 أيام",
    isOnline: false,
  },
  {
    id: "4",
    name: "ديزاير كاوس",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "مرحبا! أريد أن أحجز موعد لمعاينة العقار",
    timestamp: "منذ 3 أيام",
    unreadCount: 1,
    isOnline: true,
  },
  {
    id: "5",
    name: "إيمري سيريو",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "مرحبا! أريد أن أستفسر عن سعر الإيجار",
    timestamp: "منذ 3 أيام",
    unreadCount: 1,
    isOnline: false,
  },
  {
    id: "6",
    name: "إيمري سيريو",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "مرحبا! أريد أن أستفسر عن سعر الإيجار",
    timestamp: "منذ 3 أيام",
    unreadCount: 1,
    isOnline: false,
  },
];

const mockProperty: Property = {
  id: "1",
  title: "بيت في سبرينغفيلد",
  image: "/Images/Project1.jpg",
  year: 2021,
  bedrooms: 4,
  bathrooms: 2,
  area: "6×7.5",
  status: "active",
  size: 124,
  listingType: "لوفت حديث",
  price: 2700,
  currency: "ريال",
  description: "بيت جميل في منطقة هادئة",
  repairQuality: "new",
  livingSpace: 124,
};

const mockMessages: { [key: string]: Message[] } = {
  "1": [
    {
      id: "1",
      senderId: "1",
      content:
        "أنا مهتم بعقارك، يرجى إرسال تفاصيل أكثر عن العقار، وأريد أن أعرف إذا كانت معروضة للبيع؟",
      timestamp: "6:23",
      type: "text",
    },
    {
      id: "2",
      senderId: "me",
      content: "أهلاً وسهلاً، نعم العقار متاح للإيجار",
      timestamp: "6:24",
      type: "text",
    },
    {
      id: "3",
      senderId: "1",
      content: "هل يمكنني معرفة موقع العقار في هذا الأسبوع؟",
      timestamp: "6:43",
      type: "text",
    },
    {
      id: "4",
      senderId: "me",
      content: "ما رأيك نحدد موعد لمعاينة العقار؟ يمكنني أن أرتب وقت يناسبك",
      timestamp: "6:43",
      type: "text",
    },
  ],
};

const ConversationsPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        {mockPeople && mockPeople.length > 0 ? (
          <>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <SectionTitle Title="المحادثات" />

              <div className="flex items-center gap-4">
                <CustomSelect
                  placeholder="اختر الاشخاص"
                  options={[
                    { label: "ahmed", value: "ahmed" },
                    { label: "ali", value: "ali" },
                  ]}
                  className="!h-12"
                />

                <Casser className="!h-6" />

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
              mockMessages={mockMessages}
              mockPeople={mockPeople}
              mockProperty={mockProperty}
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
            <p className="text-lg text-gray-500">
              المحادثات هي ميزة تساعدك على التواصل مع المتقدمين والمالكين. دعنا
              نرسل رسالتك الأولى.
            </p>

            <Button className="!h-12 w-full md:w-[20%]">رسالة جديدة</Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ConversationsPage;
