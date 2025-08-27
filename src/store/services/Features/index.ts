import { DataFeaturesType, FeatureType } from "@/types/Features";
import { TypePropertyType } from "@/types/Real-estates";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface FeaturesResponse {
  data: DataFeaturesType[];
  message: MessageType;
  status_code: StatusCodeType;
}

interface FeaturesByTypeResponse {
  features: FeatureType[];

  status_code: StatusCodeType;
}

export const FeaturesApi = createApi({
  reducerPath: "FeaturesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  tagTypes: ["Features"],
  endpoints: (builder) => ({
    getFeatures: builder.query<FeaturesResponse, void>({
      query: () => {
        return `/all_features`;
      },
      providesTags: ["Features"],
    }),

    getFeaturesByType: builder.query<FeaturesByTypeResponse, TypePropertyType>({
      query: (type) => {
        return `/features/${type}`;
      },
      providesTags: ["Features"],
    }),
  }),
});

export const { useGetFeaturesQuery, useGetFeaturesByTypeQuery } = FeaturesApi;
