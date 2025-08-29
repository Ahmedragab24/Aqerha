import { getAuthTokenClient } from "@/lib/auth/auth-client";
import {
  StoreAppointmentType,
  StoreUserBookAppointmentType,
} from "@/types/appointments";
import {
  AdRealEstesType,
  ExploreRealEstateType,
  RealEstesType,
  StoreAdRealEstesType,
  StoreRealEstesType,
} from "@/types/Real-estates";
import {
  LinksType,
  MessageType,
  MetaType,
  StatusCodeType,
} from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = getAuthTokenClient();

export interface RealEstatesResponse {
  data: RealEstesType[];
  links: LinksType;
  meta: MetaType;
  message: MessageType;
  status_code: StatusCodeType;
}

export interface StoreRealEstatesResponse {
  data: RealEstesType;
  message: MessageType;
  status_code: StatusCodeType;
}

interface ExploreRealEstatesResponse {
  explore: {
    featured: ExploreRealEstateType[];
    top_selling: ExploreRealEstateType[];
    limited_units: ExploreRealEstateType[];
  };
  message: MessageType;
  status_code: StatusCodeType;
}

interface AdRealEstatesResponse {
  data: AdRealEstesType;
  message: MessageType;
  status_code: StatusCodeType;
}

export interface RealEstateByIdResponse {
  data: {
    realEstate: RealEstesType;
    related_realEstates: RealEstesType[];
  };
  message: MessageType;
  status_code: StatusCodeType;
}

interface StoreImagesResponse {
  data: {
    code: string;
  };
  message: string;
  status_code: number;
}

interface AppointmentsResponse {
  data: {
    id: number;
    date: string;
    real_estate_id: number;
    times: {
      id: number;
      start_time: string;
      end_time: string;
    }[];
    places: {
      id: number;
      address: string;
      latitude: number;
      longitude: number;
    }[];
  };
  message: string;
  status_code: number;
}

export interface MarketingRealEstatesResponse {
  data: RealEstesType[];
  links: LinksType;
  meta: MetaType;
  message: MessageType;
  status_code: StatusCodeType;
}

export const RealEstateApi = createApi({
  reducerPath: "RealEstateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  tagTypes: [
    "RealEstates",
    "RealEstateById",
    "RealEstatesByBuy",
    "UserRealEstates",
    "AdRealEstateById",
    "MarketingRealEstates",
  ],
  endpoints: (builder) => ({
    getRealEstates: builder.query<RealEstatesResponse, { per_page?: number }>({
      query: ({ per_page }) => {
        if (!per_page) {
          return `/real-estates`;
        }
        return `/real-estates?per_page=${per_page}`;
      },
      providesTags: ["RealEstates"],
    }),

    getRealEstatesByBuy: builder.query<RealEstatesResponse, void>({
      query: () => {
        return `/real-estates-by-buy`;
      },
      providesTags: ["RealEstatesByBuy"],
    }),

    getUserRealEstates: builder.query<RealEstatesResponse, void>({
      query: () => ({
        url: `/real-estate/user`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["UserRealEstates"],
    }),

    getUserRealEstatesByBuy: builder.query<RealEstatesResponse, void>({
      query: () => ({
        url: `/real-estate/user-buy`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["UserRealEstates"],
    }),

    getRealEstateById: builder.query<RealEstateByIdResponse, number>({
      query: (id) => ({
        url: `/real-estate/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["RealEstateById"],
    }),

    getAdRealEstateById: builder.query<AdRealEstatesResponse, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["AdRealEstateById"],
    }),

    getMarketingRealEstatesByCity: builder.query<
      MarketingRealEstatesResponse,
      { page: number; per_page: number }
    >({
      query: ({ page, per_page }) => ({
        url: `/marketing-real-estates?per_page=${per_page}&page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["MarketingRealEstates"],
    }),

    getUserMarketingRealEstates: builder.query<
      MarketingRealEstatesResponse,
      { per_page: number; page: number }
    >({
      query: ({ per_page, page }) => ({
        url: `/my-marketing-requests?per_page=${per_page}&page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["MarketingRealEstates"],
    }),

    getMarketingRealEstatesBuyByCity: builder.query<
      MarketingRealEstatesResponse,
      { page: number; per_page: number }
    >({
      query: ({ page, per_page }) => ({
        url: `/buy-requests-in-city?per_page=${per_page}&page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["MarketingRealEstates"],
    }),

    ExploreRealEstates: builder.query<ExploreRealEstatesResponse, void>({
      query: () => ({
        url: `/explore`,
      }),
    }),

    StoreRealEstate: builder.mutation<
      StoreRealEstatesResponse,
      StoreRealEstesType
    >({
      query: (body) => ({
        url: `/real-estate`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["RealEstates"],
    }),

    StoreImagesRealEstate: builder.mutation<StoreImagesResponse, FormData>({
      query: (body) => ({
        url: `/real-estate/store/images`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    StoreAdRealEstate: builder.mutation<
      AdRealEstatesResponse,
      StoreAdRealEstesType
    >({
      query: (body) => ({
        url: `/user/ads`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["RealEstates"],
    }),

    StoreAppointmentRealEstate: builder.mutation<
      AppointmentsResponse,
      StoreAppointmentType
    >({
      query: (body) => ({
        url: `appointments`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    StoreUserBookAppointment: builder.mutation<
      AppointmentsResponse,
      StoreUserBookAppointmentType
    >({
      query: (body) => ({
        url: `/book-appointment`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    UpdateRealEstate: builder.mutation<
      RealEstatesResponse,
      { body: StoreRealEstesType; realEstateId: number }
    >({
      query: ({ body, realEstateId }) => ({
        url: `/real-estate/${realEstateId}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["RealEstates"],
    }),

    DeleteRealEstate: builder.mutation<RealEstatesResponse, number>({
      query: (realEstateId) => ({
        url: `/real-estate/${realEstateId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["RealEstates"],
    }),
  }),
});

export const {
  useGetRealEstatesQuery,
  useGetRealEstateByIdQuery,
  useGetRealEstatesByBuyQuery,
  useGetUserRealEstatesQuery,
  useGetUserRealEstatesByBuyQuery,
  useGetUserMarketingRealEstatesQuery,
  useGetMarketingRealEstatesBuyByCityQuery,
  useGetMarketingRealEstatesByCityQuery,
  useExploreRealEstatesQuery,
  useStoreRealEstateMutation,
  useStoreImagesRealEstateMutation,
  useStoreAdRealEstateMutation,
  useStoreAppointmentRealEstateMutation,
  useStoreUserBookAppointmentMutation,
  useUpdateRealEstateMutation,
  useDeleteRealEstateMutation,
  useGetAdRealEstateByIdQuery,
} = RealEstateApi;
