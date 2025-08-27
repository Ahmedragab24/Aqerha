"use client";

import { TypePropertyType } from "@/types/Real-estates";
import Casser from "../../atoms/badges/Casser";
import CountriesCombobox from "../../molecules/combobox/CountriesCombobox";
import PriceProgress from "../../molecules/progress/PriceProgress";
import CustomSelect from "../../molecules/selects/CustomSelect";
import { Button } from "../../ui/button";
import { useAppDispatch } from "@/store/hooks";
import { Search } from "lucide-react";
import Link from "next/link";
import { PropertyTypeList } from "@/constants/selects";
import { setRealEstateType } from "@/store/features/filter/FilterRealEstate";

const SellingTabsContent = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center gap-6">
      <Link href={"/real-estate"}>
        <Button size="icon" className="p-6 shrink-0">
          <Search className="w-6 h-6" />
        </Button>
      </Link>

      <div className="space-y-2 min-w-[200px]">
        <h5 className="text-primary-dark font-semibold">الموقع</h5>
        <CountriesCombobox />
      </div>

      <Casser className="shrink-0" />

      <div className="min-w-[180px] mt-8">
        <CustomSelect
          placeholder="نوع الوحدة"
          options={PropertyTypeList}
          className="bg-white hover:bg-white/80 cursor-pointer !h-10"
          dispatch={(value) =>
            dispatch(setRealEstateType(value as TypePropertyType))
          }
        />
      </div>

      <Casser className="shrink-0" />

      <div className="min-w-[200px]">
        <PriceProgress />
      </div>
    </div>
  );
};

export default SellingTabsContent;
