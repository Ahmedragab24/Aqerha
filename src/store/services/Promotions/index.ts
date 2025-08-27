import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { PromotionOrderType, PromotionServiceType } from "@/types/Promotions";
import { MessageType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PromotionsResponse {
  data: PromotionServiceType[];
  message: MessageType;
}

export const PromotionsApi = createApi({
  reducerPath: "PromotionsApi",
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

  endpoints: (builder) => ({
    getPromotionsServices: builder.query<PromotionsResponse, void>({
      query: () => `/promotions/ads`,
    }),

    PromotionOrder: builder.mutation<PromotionsResponse, PromotionOrderType>({
      query: (body) => ({
        url: `/promotion-orders`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPromotionsServicesQuery, usePromotionOrderMutation } =
  PromotionsApi;
