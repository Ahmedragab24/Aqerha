import Casser from "@/components/atoms/badges/Casser";
import CountriesCombobox from "@/components/molecules/combobox/CountriesCombobox";
import PriceProgress from "@/components/molecules/progress/PriceProgress";
import CustomSelect from "@/components/molecules/selects/CustomSelect";
import { Button } from "@/components/ui/button";
import { RentalPropertyTypeList } from "@/constants/forms/Order";
import { Search } from "lucide-react";

const SellingTabsContent = () => {
  return (
    <div className="hidden lg:flex justify-between items-center gap-6">
      <Button size="icon" className="p-6 shrink-0">
        <Search className="w-6 h-6" />
      </Button>

      <div className="space-y-2 min-w-[200px]">
        <h5 className="text-primary-dark font-semibold">الموقع</h5>
        <CountriesCombobox />
      </div>

      <Casser className="shrink-0" />

      <div className="min-w-[180px] mt-8">
        <CustomSelect
          placeholder="نوع الوحدة"
          options={RentalPropertyTypeList}
          className="bg-white hover:bg-white/80 cursor-pointer !h-10"
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
