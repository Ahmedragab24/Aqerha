import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserData } from "@/types/Auth";

interface UserDataResponse {
  message: string;
  token: string;
  user: UserData;
}

interface LogOutResponse {
  status_code: number;
  massage: string;
  data: [];
}

interface RegisterResponse {
  data: {
    token: string;
    user: UserData;
  };
  message: string;
  status_code: number;
}

interface SendCodeResponse {
  data: {
    otp: number;
  };
  message: string;
  status_code: number;
}

interface VerifyOtpResponse {
  data: {
    user: UserData;
    token: string;
  };
  message: string;
  status_code: number;
}

interface ResetPasswordResponse {
  data: {
    otp: number;
  };
  message: string;
  status_code: number;
}

interface DeleteAccountResponse {
  data: {
    otp: number;
  };
  message: string;
  status_code: number;
}

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    userLogin: builder.mutation<UserDataResponse, FormData>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    userLogOut: builder.mutation<LogOutResponse, string | null>({
      query: (token) => ({
        url: "/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }),
    }),

    userRegister: builder.mutation<RegisterResponse, FormData>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    SendOtp: builder.mutation<SendCodeResponse, { phone: string }>({
      query: (phone) => ({
        url: "/send-otp",
        method: "POST",
        body: phone,
      }),
    }),

    verifyOtp: builder.mutation<VerifyOtpResponse, FormData>({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    verifyResetOtp: builder.mutation<VerifyOtpResponse, FormData>({
      query: (data) => ({
        url: "/verify-reset-otp",
        method: "POST",
        body: data,
      }),
    }),

    ResetPassword: builder.mutation<ResetPasswordResponse, FormData>({
      query: (data) => ({
        url: "/Reset-password",
        method: "POST",
        body: data,
      }),
    }),

    DeleteAccount: builder.mutation<DeleteAccountResponse, string>({
      query: (token) => ({
        url: "/Reset-password",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserLogOutMutation,
  useUserRegisterMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation,
  useDeleteAccountMutation,
} = AuthApi;
