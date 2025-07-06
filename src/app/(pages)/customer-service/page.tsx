import SectionTitle from "@/components/atoms/title/SectionTitle";
import CustomerServicesDialog from "@/components/organisms/Popups/CustomerServicesDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerServicePage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="خدمة العملاء" className="text-center" />

        <div className="md:max-w-2xl md:mx-auto">
          <div className="flex flex-col gap-6">
            {/* Message */}
            <CustomerServicesDialog>
              <Button variant={"outline"} className="h-14">
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Icons/Chat, Messages, Bubble, Circle.svg"
                      alt="Messages"
                      width={25}
                      height={25}
                    />
                    <h3>رسالة</h3>
                  </div>

                  <Image
                    src="/Icons/Frame 1261153424.svg"
                    alt="Messages"
                    width={20}
                    height={20}
                  />
                </div>
              </Button>
            </CustomerServicesDialog>

            {/* WhatsApp */}
            <Button variant={"outline"} className="h-14">
              <Link className="w-full" href={"tel:01228317491"}>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Icons/mingcute_whatsapp-fill.svg"
                      alt="Messages"
                      width={25}
                      height={25}
                    />
                    <h3>WhatsApp</h3>
                  </div>

                  <Image
                    src="/Icons/Frame 1261153424.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            </Button>

            {/* Question */}
            <Button variant={"outline"} className="h-14">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/Icons/uil_chat-info.svg"
                    alt="info"
                    width={25}
                    height={25}
                  />
                  <div className="flex flex-col items-start gap-1">
                    <h3>اطرح سؤالاً</h3>
                    <p className="text-sm font-normal text-gray-500">
                      يمكن للروبوت و فريق العمل لدينا مساعدتك
                    </p>
                  </div>
                </div>

                <Image
                  src="/Icons/Frame 1261153424.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
              </div>
            </Button>

            {/* Search Help */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="البحث عن مساعدة"
                    className="bg-secondary"
                  />

                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image
                      src="/Icons/bitcoin-icons_search-outline.svg"
                      alt="search"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-gray-700">
                      ما هي متطلبات نشر الإعلان العقاري؟
                    </h3>

                    <Image
                      src="/Icons/Frame 1261153424.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-gray-700">
                      كيف أعلن عن عقار إذا كنت المالك أو الوكيل
                    </h3>

                    <Image
                      src="/Icons/Frame 1261153424.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-gray-700">
                      الأسئلة المتكررة بخصوص ترخيص الإعلانات
                    </h3>

                    <Image
                      src="/Icons/Frame 1261153424.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-gray-700">
                      كل ما تحتاج معرفته لإضافة إعلانك العقاري
                    </h3>

                    <Image
                      src="/Icons/Frame 1261153424.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomerServicePage;
