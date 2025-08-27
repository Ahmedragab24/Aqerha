"use client";

import { useGetAllAuctionsQuery } from "@/store/services/Auctions";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import PaginationProducts from "@/components/organisms/paginations/PaginationList";
import { TypeAuctionCategoryType, TypeAuctionType } from "@/types/Actions";
import CustomSelect from "@/components/molecules/selects/CustomSelect";
import { AuctionCategoryList, AuctionTypeList } from "@/constants/Auctions";
import { Hammer } from "lucide-react";
import AuctionCard from "@/components/molecules/cards/AuctionDetailsCard";

const AuctionsPage = () => {
  const [category, setCategory] = useState<TypeAuctionCategoryType | "all">();
  const [type, setType] = useState<TypeAuctionType | "all">();
  const { page, per_page } = useAppSelector((state) => state.page);
  const { data, isLoading } = useGetAllAuctionsQuery({
    page,
    per_page,
    category: category === "all" ? undefined : category,
    type: type === "all" ? undefined : type,
  });
  const AuctionsList = data?.data || [];

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <div className="space-y-16">
        <div className="text-center">
          <SectionTitle Title="المزادات" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <CustomSelect
            options={AuctionTypeList}
            placeholder="نوع المزاد"
            value={type as string}
            onChange={(val) => setType(val as TypeAuctionType)}
            className="!h-12 shadow-md"
          />

          <CustomSelect
            options={AuctionCategoryList}
            placeholder="الحالة"
            value={category as string}
            onChange={(val) => setCategory(val as TypeAuctionCategoryType)}
            className="!h-12 shadow-md"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <GroupCardsSkeletons count={8} />
          ) : (
            AuctionsList.map((item) => (
              <AuctionCard key={item.id} AuctionDetails={item} />
            ))
          )}
        </div>

        {AuctionsList.length === 0 && (
          <DataNotFount
            title="لا يوجد مزادات"
            description="لا يوجد مزادات حالياً"
            icon={<Hammer className="w-10 h-10" />}
          />
        )}

        {/* Pagination */}
        {data?.data && data?.meta?.last_page > 1 && (
          <PaginationProducts
            currentPage={page}
            totalPages={data?.meta?.last_page || 1}
          />
        )}
      </div>
    </main>
  );
};

export default AuctionsPage;
