"use client";

import CustomAreaSelect from "@/components/molecules/selects/CustomAreaSelect";
import CustomSelect from "../../molecules/selects/CustomSelect";
import {
  PropertyCategory,
  PropertyTypeList,
  purposesOfRealEstate,
  RegionList,
} from "@/constants/selects";
import {
  setInterface,
  setPurpose,
  setPurposeType,
  setRealEstateType,
} from "@/store/features/filter/FilterRealEstate";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  TypeInterfaceType,
  TypePropertyType,
  TypePurposeType,
  TypeUsedRealEstateType,
} from "@/types/Real-estates";

const PropertiesBaseFilter = () => {
  const dispatch = useAppDispatch();
  const { FilterParams } = useAppSelector((state) => state.FilterRealEstate);

  return (
    <>
      {/* Property Type Filter */}
      <CustomSelect
        placeholder="نوع العقار"
        options={PropertyTypeList}
        className="SelectBtn"
        dispatch={(value: TypePropertyType) =>
          dispatch(setRealEstateType(value))
        }
      />
      {/* Price Filter */}
      <CustomSelect
        placeholder="الغرض"
        options={purposesOfRealEstate}
        className="SelectBtn"
        dispatch={(value: TypePurposeType) => dispatch(setPurpose(value))}
      />

      {/* Price Filter */}
      {FilterParams?.purpose === "rent" && (
        <CustomSelect
          placeholder="الاستخدام"
          options={PropertyCategory}
          className="SelectBtn"
          dispatch={(value: TypeUsedRealEstateType) =>
            dispatch(setPurposeType(value))
          }
        />
      )}
      {/* Region Filter */}
      <CustomSelect
        placeholder="المنطقة"
        options={RegionList}
        className="SelectBtn"
        dispatch={(value: TypeInterfaceType) => dispatch(setInterface(value))}
      />

      {/* Area Filter */}
      <CustomAreaSelect className="SelectBtn" />
    </>
  );
};

export default PropertiesBaseFilter;
