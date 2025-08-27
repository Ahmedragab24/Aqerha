import { getAuthTokenClient } from "@/lib/auth/auth-client";
import {
  ContractingCompanyType,
  StoreContractingCompanyType,
} from "@/types/ContractingCompanies";
import { LinksType, MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ContractingCompanyApiResponse {
  data: {
    "Contracting Companies": {
      data: ContractingCompanyType[];
      current_page: number;
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: LinksType[];
      next_page_url: string | null;
      path: string;
      per_page: number;
      prev_page_url: string | null;
      to: number;
      total: number;
    };
  };
  message: MessageType;
  status_code: StatusCodeType;
}

interface ContractingCompanyApiByIdResponse {
  data: {
    "Contracting Company": ContractingCompanyType;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

export const ContractingCompanyApi = createApi({
  reducerPath: "ContractingCompanyApi",
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

  tagTypes: ["ContractingCompanies", "ContractingCompany"],
  endpoints: (builder) => ({
    getAllContractingCompanies: builder.query<
      ContractingCompanyApiResponse,
      { city?: string; page?: number }
    >({
      query: ({ city, page }) => `/contracters?city=${city}&page=${page}`,
      providesTags: ["ContractingCompanies"],
    }),

    getContractingCompanyById: builder.query<
      ContractingCompanyApiByIdResponse,
      number
    >({
      query: (id) => `/contracters/${id}`,
      providesTags: ["ContractingCompany"],
    }),

    storeProject: builder.mutation<
      ContractingCompanyApiByIdResponse,
      StoreContractingCompanyType
    >({
      query: (body) => ({
        url: `/contracters`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["ContractingCompanies"],
    }),
  }),
});

export const {
  useGetAllContractingCompaniesQuery,
  useGetContractingCompanyByIdQuery,
  useStoreProjectMutation,
} = ContractingCompanyApi;
