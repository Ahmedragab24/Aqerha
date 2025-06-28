import CustomToggleGroup from "@/components/molecules/btnsGroup/CustomToggleGroup";
import {
  bathroomList,
  bedroomList,
  coolingSystemList,
  elevatorList,
  floorList,
  floorTypeList,
  heatingSystemList,
  parkingList,
  storeList,
  typeOfBathroomList,
} from "@/constants/selects";

export function AdditionalFilters() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header - optional */}
      <div className="flex-shrink-0 pb-2 sm:pb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          المرشحات الإضافية
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <div className="space-y-4 sm:space-y-6 pr-2 pb-4">
            <CustomToggleGroup title="غرفة النوم" Items={bedroomList} />
            <CustomToggleGroup title="موقف سيارات" Items={parkingList} />
            <CustomToggleGroup title="مخزن" Items={storeList} />
            <CustomToggleGroup title="حمام" Items={bathroomList} />
            <CustomToggleGroup title="نوع الحمام" Items={typeOfBathroomList} />
            <CustomToggleGroup title="مصعد" Items={elevatorList} />
            <CustomToggleGroup title="طابق" Items={floorList} />
            <CustomToggleGroup title="نظام التبريد" Items={coolingSystemList} />
            <CustomToggleGroup title="نظام التدفئة" Items={heatingSystemList} />
            <CustomToggleGroup title="نوع الأرضية" Items={floorTypeList} />
          </div>
        </div>
      </div>
    </div>
  );
}
