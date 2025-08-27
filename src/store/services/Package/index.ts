import { PackageType } from "@/types/Package";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PackagesResponse {
  data: PackageType[];
  message: MessageType;
  status_code: StatusCodeType;
}

export const PackageApi = createApi({
  reducerPath: "PackageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  tagTypes: ["Packages"],
  endpoints: (builder) => ({
    getAllPackages: builder.query<PackagesResponse, void>({
      query: () => `/packages`,
      providesTags: ["Packages"],
    }),
  }),
});

export const { useGetAllPackagesQuery } = PackageApi;
