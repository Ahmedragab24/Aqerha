import { getAuthTokenClient } from "@/lib/auth/auth-client";
import {
  ChangePasswordType,
  ProfileType,
  StoreReviewType,
} from "@/types/Profile";
import { AdRealEstesType } from "@/types/Real-estates";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProfileResponse {
  data: ProfileType;
  message: MessageType;
  status_code: StatusCodeType;
}

interface UserAdsResponse {
  data: AdRealEstesType[];
  message: MessageType;
  status_code: StatusCodeType;
}

interface ChangePasswordResponse {
  data: [];
  massage: MessageType;
  status_code: StatusCodeType;
}

export const ProfileApi = createApi({
  reducerPath: "ProfileApi",
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

  tagTypes: ["Profile", "Ads"],
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileResponse, void>({
      query: () => `/profile`,
      providesTags: ["Profile"],
    }),

    getProfileById: builder.query<ProfileResponse, number>({
      query: (id) => `/users/${id}/profile`,
      providesTags: ["Profile"],
    }),

    getUserAds: builder.query<UserAdsResponse, void>({
      query: () => `/user/ads`,
      providesTags: ["Ads"],
    }),

    DeleteAd: builder.mutation<UserAdsResponse, number>({
      query: (id) => ({
        url: `/user/ads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Ads"],
    }),

    StoreReview: builder.mutation<ProfileResponse, StoreReviewType>({
      query: (body) => ({
        url: `/store-review`,
        method: "POST",
        body,
      }),
    }),

    changePassword: builder.mutation<
      ChangePasswordResponse,
      ChangePasswordType
    >({
      query: (body) => ({
        url: `/change-password`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),

    changePhone: builder.mutation<ChangePasswordResponse, string>({
      query: (phone) => ({
        url: `/change-phone/send-otp`,
        method: "POST",
        body: { phone },
      }),
      invalidatesTags: ["Profile"],
    }),

    UpdatePhone: builder.mutation<
      ProfileResponse,
      { phone: string; otp: number }
    >({
      query: (body) => ({
        url: `/change-phone/verify`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),

    UpdateProfile: builder.mutation<ProfileResponse, FormData>({
      query: (body) => ({
        url: `/profile-update`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useChangePhoneMutation,
  useUpdatePhoneMutation,
  useUpdateProfileMutation,
  useGetProfileByIdQuery,
  useStoreReviewMutation,
  useGetUserAdsQuery,
  useDeleteAdMutation,
  useGetProfileQuery,
} = ProfileApi;
