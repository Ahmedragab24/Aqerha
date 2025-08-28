"use client";

import React, { useEffect } from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SearchMapDialog from "../organisms/Popups/SearchMapDialog";
import PropertiesForRentFilter from "../organisms/filters/PropertiesForRentFilter";
import { useGetRealEstateFilterQuery } from "../../store/services/Filters/RealEstateFilter";
import RealEstateCard from "../molecules/cards/RealEstateCard";
import PaginationList from "../organisms/paginations/PaginationList";
import PropertiesNotFound from "../Error&NotFound/PropertiesNotFound";
import { useAppSelector } from "@/store/hooks";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";
import { useAppDispatch } from "@/store/hooks";
import { setFilterRealEstate } from "@/store/features/filter/FilterRealEstate";
import { Trash2 } from "lucide-react";
import { setPage } from "@/store/features/page/pageSlice";
import { usePathname } from "next/navigation";
import { useGetRealEstatesQuery } from "@/store/services/RealEstate";

const PropertiesForRentSection = () => {
  const { page, FilterRealEstate } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const { data: RealEstesData, isLoading } = useGetRealEstateFilterQuery({
    page: page.page,
    per_page: page.per_page,
    city: FilterRealEstate.FilterParams.city,
    real_estate_type: FilterRealEstate.FilterParams.real_estate_type,
    rooms: FilterRealEstate.FilterParams.rooms,
    bathrooms: FilterRealEstate.FilterParams.bathrooms,
    min_price: FilterRealEstate.FilterParams.min_price,
    max_price: FilterRealEstate.FilterParams.max_price,
    apartments: FilterRealEstate.FilterParams.apartments,
    features: FilterRealEstate.FilterParams.features,
    interface: FilterRealEstate.FilterParams.interface,
    min_area: FilterRealEstate.FilterParams.min_area,
    max_area: FilterRealEstate.FilterParams.max_area,
    max_age: FilterRealEstate.FilterParams.max_age,
    min_street_width: FilterRealEstate.FilterParams.min_street_width,
    phone: FilterRealEstate.FilterParams.phone,
    purpose: FilterRealEstate.FilterParams.purpose,
    purpose_type: FilterRealEstate.FilterParams.purpose_type,
    rental_period: FilterRealEstate.FilterParams.rental_period,
    salons: FilterRealEstate.FilterParams.salons,
    sort_by: FilterRealEstate.FilterParams.sort_by,
    sort_direction: FilterRealEstate.FilterParams.sort_direction,
  });
  const { data: AllRealEstateData } = useGetRealEstatesQuery({
    per_page: 100,
  });
  const AllRealEstate = AllRealEstateData?.data ?? [];

  const properties = RealEstesData?.data ?? [];
  const totalPages = RealEstesData?.meta?.last_page ?? 1;

  useEffect(() => {
    if (pathname && pathname !== "/real-estate") {
      dispatch(setFilterRealEstate({ FilterParams: {} }));
      dispatch(setPage(1));
    }
  }, [pathname, dispatch]);

  return (
    <div className="space-y-6">
      {/* Header + Filters */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <SectionTitle Title="البحث عن وحدات للإيجار/للشراء" />
          <div className="flex items-center gap-4">
            <SearchMapDialog properties={AllRealEstate} />
            <div
              onClick={() => {
                dispatch(setFilterRealEstate({ FilterParams: {} }));
                dispatch(setPage(1));
              }}
              className="flex items-center gap-1 text-red-400 text-sm cursor-pointer hover:underline"
            >
              <Trash2 className="w-4 h-4" />
              <h3>حذف جميع الفلاتر</h3>
            </div>
          </div>
        </div>
        <PropertiesForRentFilter />
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <GroupCardsSkeletons count={8} mainClassSkeleton="!h-[350px]" />
        </div>
      ) : properties.length > 0 ? (
        <div className="space-y-12">
          {/* Properties List */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((item) => (
              <RealEstateCard key={item.id} product={item} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <PaginationList currentPage={page.page} totalPages={totalPages} />
          )}
        </div>
      ) : (
        <PropertiesNotFound />
      )}
    </div>
  );
};

export default PropertiesForRentSection;
