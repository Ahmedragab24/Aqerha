import Image from "next/image";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import React from "react";
import AddOrderDialog from "@/components/organisms/Popups/AddOrderDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const RealEstateMarketingRequestPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <div className="h-screen flex flex-col justify-center gap-16">
        <SectionTitle Title="طلب تسويق عقار" className="text-center" />

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

export default RealEstateMarketingRequestPage;
