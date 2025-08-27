import DataNotFount from "../../Error&NotFound/DataNotFount";
import MarketerOrBrokerCard from "../../molecules/cards/MarketerOrBrokerCard";
import React from "react";
import { MarketingRealEstatesResponse } from "@/store/services/RealEstate";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import { SearchX } from "lucide-react";
import PaginationProducts from "../paginations/PaginationList";

const MarketingRequests = ({
  data,
  isLoading,
  isError,
  pageNum,
}: {
  data: MarketingRealEstatesResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  pageNum: number;
}) => {
  if (isError) {
    return (
      <main className="Container pt-28 mb-16">
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<SearchX className="w-10 h-10" />}
        />
      </main>
    );
  }

  return (
    <div className="space-y-10">
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GroupCardsSkeletons count={3} />
        </div>
      ) : data && data?.data?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.data.map((item) => (
            <MarketerOrBrokerCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <DataNotFount
          title="لا يوجد مشاريع"
          description="لا يوجد مشاريع حاليا"
          icon={<SearchX className="w-10 h-10" />}
        />
      )}

      {data?.meta && data?.meta?.last_page > 1 && (
        <PaginationProducts
          currentPage={pageNum}
          totalPages={data?.meta?.last_page || 1}
        />
      )}
    </div>
  );
};

export default MarketingRequests;
