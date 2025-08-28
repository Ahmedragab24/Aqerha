import SearchCity from "../../atoms/inputs/SearchCity";

import AdditionalFiltersDialog from "../Popups/AdditionalFiltersDialog";
import PropertiesBaseFilter from "./PropertiesBaseFilter";

const PropertiesForRentFilter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-44 rounded-lg border border-gray-200 px-2 py-4">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap items-center gap-4">
        <PropertiesBaseFilter />

        {/* Additional Filters */}
        <AdditionalFiltersDialog />
      </div>

      {/* Search Input */}

      <SearchCity />
    </div>
  );
};

export default PropertiesForRentFilter;
