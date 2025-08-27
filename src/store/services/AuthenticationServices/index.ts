import { getAuthTokenClient } from "@/lib/auth/auth-client";
import {
  AuthenticationServiceType,
  DalServiceRequestType,
} from "@/types/AuthenticationService";
import { MessageType, StatusCodeType } from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ServicesResponse {
  data: AuthenticationServiceType[];
  message: MessageType;
  status_code: StatusCodeType;
}
interface ServicesRequestResponse {
  data: DalServiceRequestType;
  message: MessageType;
  status_code: StatusCodeType;
}

export const ServicesApi = createApi({
  reducerPath: "ServicesApi",
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

  tagTypes: ["Services", "UserService"],
  endpoints: (builder) => ({
    getServices: builder.query<ServicesResponse, void>({
      query: () => `/dal-services`,
      providesTags: ["Services"],
    }),

    getUserRequestServiceById: builder.query<ServicesRequestResponse, number>({
      query: (serviceId) => `/dal-service/${serviceId}`,
      providesTags: ["UserService"],
    }),

    dalRequest: builder.mutation<
      ServicesRequestResponse,
      DalServiceRequestType
    >({
      query: (body) => ({
        url: `/dal-request`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetUserRequestServiceByIdQuery,
  useDalRequestMutation,
} = ServicesApi;
