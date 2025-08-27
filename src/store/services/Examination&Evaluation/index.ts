import { getAuthTokenClient } from "@/lib/auth/auth-client";
import {
  EvaluationRequestType,
  examinationRequestType,
} from "@/types/inspection-and-evaluation-requests";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface examinationRequestResponse {
  data: {
    message: string;
    data: examinationRequestType;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

interface EvaluationRequestResponse {
  data: {
    message: string;
    data: EvaluationRequestType;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

export const ExaminationAndEvaluationApi = createApi({
  reducerPath: "ExaminationAndEvaluationApi",
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
    examinationRequest: builder.mutation<
      examinationRequestResponse,
      examinationRequestType
    >({
      query: (body) => ({
        url: `/engineering-request`,
        method: "POST",
        body,
      }),
    }),

    evaluationRequest: builder.mutation<EvaluationRequestResponse, FormData>({
      query: (body) => ({
        url: `/evaluation-requests`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useEvaluationRequestMutation, useExaminationRequestMutation } =
  ExaminationAndEvaluationApi;
