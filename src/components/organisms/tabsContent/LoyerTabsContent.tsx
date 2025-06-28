import Casser from "@/components/atoms/badges/Casser";
import CountriesCombobox from "@/components/molecules/combobox/CountriesCombobox";
import PriceProgress from "@/components/molecules/progress/PriceProgress";
import CustomSelect from "@/components/molecules/selects/CustomSelect";
import { Button } from "@/components/ui/button";
import { UnitType } from "@/constants";
import { Search } from "lucide-react";

const LoyerTabsContent = () => {
  return (
    <div className="w-full">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex items-center gap-2">
          <Button size="icon" className="p-3 shrink-0">
            <Search className="w-4 h-4" />
          </Button>
          <h5 className="text-primary-dark font-semibold text-sm">الموقع</h5>
        </div>

        <div className="flex items-center justify-between gap-3">
          <CountriesCombobox />
          <CustomSelect
            placeholder="نوع الوحدة"
            options={UnitType}
            className="w-full border-none shadow-none text-primary-dark"
          />
        </div>

        <div className="w-full">
          <PriceProgress />
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden items-center gap-4 flex-wrap">
        <Button size="icon" className="p-4 shrink-0">
          <Search className="w-5 h-5" />
        </Button>

        <div className="flex-1 min-w-[200px] space-y-1">
          <h5 className="text-primary-dark font-semibold text-sm">الموقع</h5>
          <CountriesCombobox />
        </div>

        <Casser className="shrink-0" />

        <div className="flex-1 min-w-[150px]">
          <CustomSelect
            placeholder="نوع الوحدة"
            options={UnitType}
            className="w-full border-none shadow-none text-primary-dark"
          />
        </div>

        <div className="w-full mt-2">
          <PriceProgress />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-between items-center gap-6">
        <Button size="icon" className="p-6 shrink-0">
          <Search className="w-6 h-6" />
        </Button>

        <div className="space-y-2 min-w-[200px]">
          <h5 className="text-primary-dark font-semibold">الموقع</h5>
          <CountriesCombobox />
        </div>

        <Casser className="shrink-0" />

        <div className="min-w-[180px]">
          <CustomSelect
            placeholder="نوع الوحدة"
            options={UnitType}
            className="w-full px-8 border-none shadow-none text-primary-dark"
          />
        </div>

        <Casser className="shrink-0" />

        <div className="min-w-[200px]">
          <PriceProgress />
        </div>
      </div>
    </div>
  );
};

export default LoyerTabsContent;
