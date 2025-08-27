import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { AuctionType } from "@/types/Actions";
import { bannerType } from "@/types/Banners";
import { ContractingCompanyType } from "@/types/ContractingCompanies";
import { DeveloperType } from "@/types/Developers";
import { EngineeringOfficeType } from "@/types/EngineeringOffices";
import { NewType } from "@/types/News";
import { ProjectType } from "@/types/projects";
import { RealEstesType } from "@/types/Real-estates";
import { ExaminationType } from "@/types/Requests";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface HomeResponse {
  data: {
    projects: ProjectType[];
    developers: DeveloperType[];
    banners: bannerType[];
    engineering_offices: EngineeringOfficeType[];
    auctions: AuctionType[];
    contracting_companies: ContractingCompanyType[];
    news: NewType[];
    examinations: ExaminationType[];
    popular_real_estates: RealEstesType[];
  };
  message: string;
  status_code: number;
}

export const HomeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = getAuthTokenClient();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getHomeData: builder.query<HomeResponse, void>({
      query: () => `/home`,
      providesTags: ["Home"],
    }),
  }),
});

export const { useGetHomeDataQuery } = HomeApi;
