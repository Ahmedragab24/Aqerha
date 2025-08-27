import { RealEstateFilterParams } from "@/store/services/Filters/RealEstateFilter";
import type { RootState } from "@/store/store";
import {
  TypeInterfaceType,
  TypePropertyType,
  TypePurposeType,
  TypeRentalPeriodType,
  TypeUsedRealEstateType,
} from "@/types/Real-estates";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  FilterParams: RealEstateFilterParams;
}

const initialState: FilterState = {
  FilterParams: {},
};

export const FilterRealEstateSlice = createSlice({
  name: "FilterRealEstate",
  initialState,
  reducers: {
    // Option 1: Mutate state directly (recommended)
    setFilterRealEstate: (state, action: PayloadAction<FilterState>) => {
      Object.assign(state, action.payload);
    },
    setRealEstateType: (state, action: PayloadAction<TypePropertyType>) => {
      state.FilterParams.real_estate_type = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.FilterParams.city = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.FilterParams.min_price = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.FilterParams.max_price = action.payload;
    },
    setMinArea: (state, action: PayloadAction<number>) => {
      state.FilterParams.min_area = action.payload;
    },
    setMaxArea: (state, action: PayloadAction<number>) => {
      state.FilterParams.max_area = action.payload;
    },
    setApartments: (state, action: PayloadAction<number>) => {
      state.FilterParams.apartments = action.payload;
    },
    setBathrooms: (state, action: PayloadAction<number>) => {
      state.FilterParams.bathrooms = action.payload;
    },
    setRooms: (state, action: PayloadAction<number>) => {
      state.FilterParams.rooms = action.payload;
    },
    setSalons: (state, action: PayloadAction<number>) => {
      state.FilterParams.salons = action.payload;
    },
    setMaxAge: (state, action: PayloadAction<number>) => {
      state.FilterParams.max_age = action.payload;
    },
    setInterface: (state, action: PayloadAction<TypeInterfaceType>) => {
      state.FilterParams.interface = action.payload;
    },
    setMinStreetWidth: (state, action: PayloadAction<number>) => {
      state.FilterParams.min_street_width = action.payload;
    },
    setPurpose: (state, action: PayloadAction<TypePurposeType>) => {
      state.FilterParams.purpose = action.payload;
    },
    setPurposeType: (state, action: PayloadAction<TypeUsedRealEstateType>) => {
      state.FilterParams.purpose_type = action.payload;
    },
    setFeatures: (state, action: PayloadAction<number[]>) => {
      state.FilterParams.features = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.FilterParams.phone = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.FilterParams.sort_by = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<string>) => {
      state.FilterParams.sort_direction = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.FilterParams.per_page = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.FilterParams.page = action.payload;
    },
    setRentalPeriod: (state, action: PayloadAction<TypeRentalPeriodType>) => {
      state.FilterParams.rental_period = action.payload;
    },
  },
});

export const {
  setFilterRealEstate,
  setCity,
  setMinPrice,
  setMaxPrice,
  setMinArea,
  setMaxArea,
  setApartments,
  setBathrooms,
  setRooms,
  setSalons,
  setMaxAge,
  setInterface,
  setMinStreetWidth,
  setPurpose,
  setPurposeType,
  setFeatures,
  setPhone,
  setSortBy,
  setSortDirection,
  setPerPage,
  setPage,
  setRentalPeriod,
  setRealEstateType,
} = FilterRealEstateSlice.actions;

export const selectFilterRealEstate = (state: RootState) =>
  state.FilterRealEstate as FilterState;

export default FilterRealEstateSlice.reducer;
