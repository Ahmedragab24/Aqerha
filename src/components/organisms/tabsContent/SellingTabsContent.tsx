import Casser from "@/components/atoms/badges/Casser";
import CountriesCombobox from "@/components/molecules/combobox/CountriesCombobox";
import PriceProgress from "@/components/molecules/progress/PriceProgress";
import CustomSelect from "@/components/molecules/selects/CustomSelect";
import { Button } from "@/components/ui/button";
import { UnitType } from "@/constants";
import { Search } from "lucide-react";

const SellingTabsContent = () => {
  return (
    <div className="flex justify-between items-center gap-6">
      <Button size="icon" className="p-6">
        <Search className="!w-6 !h-6" />
      </Button>

      <div className="space-y-2">
        <h5 className="text-primary-dark font-semibold">الموقع</h5>
        <CountriesCombobox />
      </div>

      <Casser className="m-auto" />

      <div className="">
        <CustomSelect
          placeholder="نوع الوحدة"
          options={UnitType}
          className="w-fit !px-8 border-none shadow-none !text-primary-dark"
        />
      </div>

      <Casser className="m-auto" />

      <div>
        <PriceProgress />
      </div>
    </div>
  );
};

export default SellingTabsContent;
