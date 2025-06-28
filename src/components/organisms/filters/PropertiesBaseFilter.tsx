import CustomSelect from "@/components/molecules/selects/CustomSelect";
import {
  AreaList,
  PriceList,
  PropertyTypeList,
  RegionList,
} from "@/constants/selects";

const PropertiesBaseFilter = () => {
  return (
    <>
      {/* Region Filter */}
      <CustomSelect
        placeholder="المنطقة"
        options={RegionList}
        className="SelectBtn"
      />

      {/* Area Filter */}
      <CustomSelect
        placeholder="المساحة"
        options={AreaList}
        className="SelectBtn"
      />

      {/* Price Filter */}
      <CustomSelect
        placeholder="السعر"
        options={PriceList}
        className="SelectBtn"
      />

      {/* Property Type Filter */}
      <CustomSelect
        placeholder="نوع العقار"
        options={PropertyTypeList}
        className="SelectBtn"
      />
    </>
  );
};

export default PropertiesBaseFilter;
