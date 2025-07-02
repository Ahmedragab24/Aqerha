import SectionTitle from "@/components/atoms/title/SectionTitle";
import AddOrderDialog from "@/components/organisms/Popups/AddOrderDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const OrderPropertyPage = () => {
  return (
    <main className="Container">
      <div className="h-screen flex flex-col justify-center gap-16">
        <SectionTitle Title="أطلب عقارك" className="text-center" />
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/solar_document-add-green-outline.svg"
            alt="order"
            width={150}
            height={150}
          />

          <h2 className="text-xl md:text-2xl font-semibold">
            لا يوجد لديك طلبات مسبقة
          </h2>
          <p className="text-sm md:text-lg text-gray-500">
            قم بالتواصل مع العقاريين و سيتم التواصل معك
          </p>

          <AddOrderDialog>
            <Button className="w-full md:w-[20%] !h-11">
              <Plus />
              إضافة طلب
            </Button>
          </AddOrderDialog>
        </div>
      </div>
    </main>
  );
};

export default OrderPropertyPage;
