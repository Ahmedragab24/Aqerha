import { NewType } from "@/types/News";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type NewsResponse = NewType[];

export const NewsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  tagTypes: ["News"],
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsResponse, void>({
      query: () => `/news`,
      providesTags: ["News"],
    }),
  }),
});

export const { useGetAllNewsQuery } = NewsApi;
