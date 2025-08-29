import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { EvaluationType, ExaminationType } from "@/types/Requests";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ExaminationsResponse {
  data: ExaminationType[];
  message: MessageType;
  status_code: StatusCodeType;
}

interface EvaluationsResponse {
  evaluation_requests: EvaluationType[];
  message: MessageType;
  status_code: StatusCodeType;
}

export const GetRequestsApi = createApi({
  reducerPath: "GetRequestsApi",
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
    getExaminations: builder.query<ExaminationsResponse, void>({
      query: () => `/engineering-examinations`,
    }),

    getExaminationsByUser: builder.query<ExaminationsResponse, void>({
      query: () => `/my-examination-requests`,
    }),

    getEvaluations: builder.query<EvaluationsResponse, void>({
      query: () => `/evaluation-requests`,
    }),

    getEvaluationByUser: builder.query<EvaluationsResponse, void>({
      query: () => `/my-evaluation-requests`,
    }),

    getNearbyExamination: builder.query<ExaminationsResponse, void>({
      query: () => `/nearbyExamination`,
    }),

    getNearbyEvaluation: builder.query<EvaluationsResponse, void>({
      query: () => `/nearby-evaluations`,
    }),
  }),
});

export const {
  useGetExaminationsQuery,
  useGetExaminationsByUserQuery,
  useGetEvaluationsQuery,
  useGetEvaluationByUserQuery,
  useGetNearbyExaminationQuery,
  useGetNearbyEvaluationQuery,
} = GetRequestsApi;
