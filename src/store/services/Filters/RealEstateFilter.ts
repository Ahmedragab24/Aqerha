import {
  RealEstesType,
  TypeInterfaceType,
  TypePropertyType,
  TypePurposeType,
  TypeRentalPeriodType,
  TypeUsedRealEstateType,
} from "@/types/Real-estates";
import {
  LinksType,
  MessageType,
  MetaType,
  StatusCodeType,
} from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RealEstateFilterResponse {
  data: RealEstesType[];
  links: LinksType;
  meta: MetaType;
  message: MessageType;
  status_code: StatusCodeType;
}

export interface RealEstateFilterParams {
  min_price?: number;
  max_price?: number;
  min_area?: number;
  max_area?: number;
  apartments?: number;
  rooms?: number;
  salons?: number;
  bathrooms?: number;
  max_age?: number;
  interface?: TypeInterfaceType;
  min_street_width?: number;
  city?: string;
  rental_period?: TypeRentalPeriodType;
  purpose?: TypePurposeType;
  real_estate_type?: TypePropertyType;
  purpose_type?: TypeUsedRealEstateType;
  features?: number[];
  phone?: string;
  sort_by?: string;
  sort_direction?: string;
  per_page?: number;
  page?: number;
}

export const RealEstateFilterApi = createApi({
  reducerPath: "RealEstateFilterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["RealEstateFilter"],
  endpoints: (builder) => ({
    getRealEstateFilter: builder.query<
      RealEstateFilterResponse,
      RealEstateFilterParams
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();

        Object.entries(params || {}).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            if (Array.isArray(value)) {
              value.forEach((v) => queryParams.append(key, String(v)));
            } else {
              queryParams.append(key, String(value));
            }
          }
        });

        return `/real-estates?${queryParams.toString()}`;
      },
      providesTags: ["RealEstateFilter"],
    }),
  }),
});

export const { useGetRealEstateFilterQuery } = RealEstateFilterApi;
