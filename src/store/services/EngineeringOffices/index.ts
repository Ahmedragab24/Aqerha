import { EngineeringOfficeType } from "@/types/EngineeringOffices";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface OfficesResponse {
  data: {
    "Engineering Offices": {
      data: EngineeringOfficeType[];
      current_page: number;
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: {
        url: string;
        label: string;
        active: boolean;
      }[];
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

interface OfficesByIdResponse {
  data: {
    office: EngineeringOfficeType;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

export const EngineeringOfficesApi = createApi({
  reducerPath: "EngineeringOfficesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  tagTypes: ["Offices", "OfficesById"],
  endpoints: (builder) => ({
    getAllOffices: builder.query<
      OfficesResponse,
      { city?: string; page?: number }
    >({
      query: ({ city, page }) => `/offices?city=${city}&page=${page}`,
      providesTags: ["Offices"],
    }),

    getOfficeById: builder.query<OfficesByIdResponse, number>({
      query: (id) => `/offices/${id}`,
      providesTags: ["OfficesById"],
    }),
  }),
});

export const { useGetAllOfficesQuery, useGetOfficeByIdQuery } =
  EngineeringOfficesApi;
