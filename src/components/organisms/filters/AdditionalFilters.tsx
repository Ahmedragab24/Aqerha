"use client";

import CustomToggleGroupMultiple from "@/components/molecules/btnsGroup/CustomToggleGroupMultiple";
import CustomToggleGroup from "../../molecules/btnsGroup/CustomToggleGroup";
import { bathroomList, bedroomList } from "@/constants/selects";
import {
  setApartments,
  setBathrooms,
  setFeatures,
  setRooms,
  setSalons,
} from "@/store/features/filter/FilterRealEstate";
import { useAppDispatch } from "@/store/hooks";
import { useAppSelector } from "@/store/hooks";
import { useGetFeaturesByTypeQuery } from "@/store/services/Features";

export function AdditionalFilters() {
  const dispatch = useAppDispatch();
  const { FilterParams } = useAppSelector((state) => state.FilterRealEstate);
  const { data: FeaturesData } = useGetFeaturesByTypeQuery(
    FilterParams.real_estate_type || "apartment"
  );

  const FeaturesList = FeaturesData?.features?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

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
            <CustomToggleGroupMultiple
              title="الخصائص"
              Items={FeaturesList || []}
              type="multiple"
              value={FilterParams.features?.map(String) || []}
              dispatch={(value: string[]) =>
                dispatch(setFeatures(value.map(Number)))
              }
            />

            <CustomToggleGroup
              title="عدد الشقق"
              Items={bathroomList}
              dispatch={(value: string) => dispatch(setApartments(+value))}
            />

            <CustomToggleGroup
              title="عدد الغرف"
              Items={bedroomList}
              dispatch={(value: string) => dispatch(setRooms(+value))}
            />

            <CustomToggleGroup
              title="عدد الصالونات"
              Items={bedroomList}
              dispatch={(value: string) => dispatch(setSalons(+value))}
            />

            <CustomToggleGroup
              title="عدد الحمامات"
              Items={bathroomList}
              dispatch={(value: string) => dispatch(setBathrooms(+value))}
            />
            {/* <CustomToggleGroup
              title="نوع الحمام"
              Items={typeOfBathroomList}
              dispatch={(value) =>
                dispatch(setAdditionalFilter({ typeOfBathroom: value }))
              }
            /> */}
            {/* <CustomToggleGroup
              title="عدد المصاعد"
              Items={elevatorList}
              dispatch={(value) => dispatch(setElevator({ elevator: value }))}
            />
            <CustomToggleGroup
              title="عدد الطوابق"
              Items={floorList}
              dispatch={(value: number) => dispatch(setFloor(value))}
            /> */}
            {/* <CustomToggleGroup
              title="نظام التبريد"
              Items={coolingSystemList}
              dispatch={(value) =>
                dispatch(setAdditionalFilter({ coolingSystem: value }))
              }
            />
            <CustomToggleGroup
              title="نظام التدفئة"
              Items={heatingSystemList}
              dispatch={(value) =>
                dispatch(setAdditionalFilter({ heatingSystem: value }))
              }
            />
            <CustomToggleGroup
              title="نوع الأرضية"
              Items={floorTypeList}
              dispatch={(value) =>
                dispatch(setAdditionalFilter({ floorType: value }))
              }
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
