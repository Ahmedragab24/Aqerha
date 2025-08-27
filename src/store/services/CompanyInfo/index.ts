import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface StaticFilesResponse {
  data: {
    terms: string;
    privacy: string;
    about: string;
    Whatapp: string;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

interface ProfileResponse {
  data: [];
  message: MessageType;
  status_code: StatusCodeType;
}

interface TermsAndConditionsResponse {
  data: string;
  message: MessageType;
  status_code: StatusCodeType;
}

export const CompanyInfoApi = createApi({
  reducerPath: "CompanyInfoApi",
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

  tagTypes: ["CompanyInfo"],
  endpoints: (builder) => ({
    getFileAndInfo: builder.query<StaticFilesResponse, void>({
      query: () => `/static-files`,
      providesTags: ["CompanyInfo"],
    }),

    getTermsAndConditions: builder.query<TermsAndConditionsResponse, void>({
      query: () => `/terms`,
      providesTags: ["CompanyInfo"],
    }),

    getPrivacyPolicy: builder.query<TermsAndConditionsResponse, void>({
      query: () => `/privacy`,
      providesTags: ["CompanyInfo"],
    }),

    ContactUs: builder.mutation<ProfileResponse, FormData>({
      query: (body) => ({
        url: `/store-message-contact_us`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetFileAndInfoQuery,
  useContactUsMutation,
  useGetTermsAndConditionsQuery,
  useGetPrivacyPolicyQuery,
} = CompanyInfoApi;
