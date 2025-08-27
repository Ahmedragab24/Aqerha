"use client";

import { useGetUserMarketingRealEstatesQuery } from "@/store/services/RealEstate";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import AddOrderDialog from "../../../components/organisms/Popups/AddOrderDialog";
import { Button } from "../../../components/ui/button";
import { CircleAlert, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import MarketingRealEstateCard from "@/components/molecules/cards/MarketingRealEstateCard";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import PaginationProducts from "@/components/organisms/paginations/PaginationList";

const OrderPropertyPage = () => {
  const { page, per_page } = useAppSelector((state) => state.page);
  const { data, isLoading, isError } = useGetUserMarketingRealEstatesQuery({
    page,
    per_page,
  });

  const marketingRealEstates = data?.data || [];

  return (
    <main className="Container relative pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="أطلب عقارك" className="text-center" />

        {marketingRealEstates.length > 0 && (
          <div className="absolute w-full top-28 right-4">
            <AddOrderDialog>
              <Button className="w-fit !h-11 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                إضافة طلب جديد
              </Button>
            </AddOrderDialog>
          </div>
        )}

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GroupCardsSkeletons count={4} />
          </div>
        )}

        {isError && (
          <DataNotFount
            title="حدث خطأ ما"
            description="يرجى تحديث الصفحة أو المحاولة لاحقاً."
            icon={<CircleAlert className="w-10 h-10" />}
          />
        )}

        {!isLoading && !isError && marketingRealEstates.length > 0 && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {marketingRealEstates.map((item) => (
                <MarketingRealEstateCard
                  key={item.id}
                  marketingRealEstate={item}
                />
              ))}
            </div>

            {data && data?.meta?.last_page > 1 && (
              <PaginationProducts
                currentPage={page}
                totalPages={data.meta.last_page}
              />
            )}
          </div>
        )}

        {!isLoading && !isError && marketingRealEstates.length === 0 && (
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
              <Button className="w-full md:w-[20%] !h-11 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                إضافة طلب
              </Button>
            </AddOrderDialog>
          </div>
        )}
      </div>
    </main>
  );
};

export default OrderPropertyPage;
