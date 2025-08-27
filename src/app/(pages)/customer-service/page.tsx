"use client";

import SectionTitle from "@/components/atoms/title/SectionTitle";
import CustomerServicesDialog from "@/components/organisms/Popups/CustomerServicesDialog";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AIChatBotDialog from "@/components/organisms/Popups/AIChatBotDialog";
import { useGetFileAndInfoQuery } from "@/store/services/CompanyInfo";

const CustomerServicePage = () => {
  const { data } = useGetFileAndInfoQuery();
  const PhoneCompany = data?.data?.Whatapp;

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <SectionTitle Title="خدمة العملاء" className="text-center" />
          <p className="text-gray-500 max-w-xl mx-auto">
            نحن هنا لمساعدتك في أي وقت – تواصل معنا عبر الرسائل أو الواتساب أو
            ابحث عن إجابات سريعة لأسئلتك.
          </p>
        </div>

        {/* Options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Message */}
          <CustomerServicesDialog>
            <Card className="hover:shadow-xl transition duration-300 cursor-pointer">
              <CardContent className="flex items-center gap-4 py-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Image
                    src="/Icons/Chat, Messages, Bubble, Circle.svg"
                    alt="Messages"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">رسالة</h3>
                  <p className="text-sm text-gray-500">
                    تواصل معنا مباشرة عبر الرسائل
                  </p>
                </div>
              </CardContent>
            </Card>
          </CustomerServicesDialog>

          {/* WhatsApp */}
          <Link href={`https://wa.me/${PhoneCompany}`}>
            <Card className="hover:shadow-xl transition duration-300 cursor-pointer">
              <CardContent className="flex items-center gap-4 py-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Image
                    src="/Icons/mingcute_whatsapp-fill.svg"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-sm text-gray-500">
                    تواصل معنا بسرعة عبر الواتساب
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Question */}
          <AIChatBotDialog>
            <Card className="hover:shadow-xl transition duration-300 cursor-pointer">
              <CardContent className="flex items-center gap-4 py-6">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Image
                    src="/Icons/uil_chat-info.svg"
                    alt="info"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">اطرح سؤالاً</h3>
                  <p className="text-sm text-gray-500">
                    يمكن للروبوت وفريق العمل مساعدتك
                  </p>
                </div>
              </CardContent>
            </Card>
          </AIChatBotDialog>
        </div>
      </div>
    </main>
  );
};

export default CustomerServicePage;
