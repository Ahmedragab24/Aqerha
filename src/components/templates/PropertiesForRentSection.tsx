import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SearchMapDialog from "../organisms/Popups/SearchMapDialog";
import PropertiesForRentFilter from "../organisms/filters/PropertiesForRentFilter";
import { RealEstesData } from "@/constants/cards/RealEstate";
import RealEstateCard from "../molecules/cards/RealEstateCard";
import PaginationList from "../organisms/paginations/PaginationList";
import PropertiesNotFound from "../Error&NotFound/PropertiesNotFound";

const PropertiesForRentSection = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <SectionTitle Title="البحث عن وحدات للإيجار/للشراء" />
          <SearchMapDialog />
        </div>

        <PropertiesForRentFilter />
      </div>

      {RealEstesData && RealEstesData.length > 0 ? (
        <div className="space-y-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {RealEstesData.map((item) => (
              <RealEstateCard key={item.id} product={item} />
            ))}
          </div>

          <PaginationList />
        </div>
      ) : (
        <PropertiesNotFound />
      )}
    </div>
  );
};

export default PropertiesForRentSection;
