import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { DeveloperType, StoreDeveloperType } from "@/types/Developers";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface DevelopersResponse {
  data: {
    data: DeveloperType[];
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
  message: MessageType;
  status_code: StatusCodeType;
}

interface DevelopersByIdResponse {
  data: DeveloperType;
  message: MessageType;
  status_code: StatusCodeType;
}

export const DevelopersApi = createApi({
  reducerPath: "DevelopersApi",
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

  tagTypes: ["Developers", "DevelopersById"],
  endpoints: (builder) => ({
    getAllDevelopers: builder.query<
      DevelopersResponse,
      { city?: string; page?: number }
    >({
      query: ({ city, page }) => `/developers?city=${city}&page=${page}`,
      providesTags: ["Developers"],
    }),

    getDeveloperById: builder.query<DevelopersByIdResponse, number>({
      query: (id) => `/developers/${id}`,
      providesTags: ["DevelopersById"],
    }),

    storeDeveloper: builder.mutation<
      DevelopersByIdResponse,
      StoreDeveloperType
    >({
      query: (body) => ({
        url: `/developers`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Developers"],
    }),
  }),
});

export const {
  useGetAllDevelopersQuery,
  useGetDeveloperByIdQuery,
  useStoreDeveloperMutation,
} = DevelopersApi;
