import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { FavoriteType } from "@/types/Favorites";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface FavoritesResponse {
  data: FavoriteType[];
  message: string;
  status_code: number;
}

interface ToggleFavoriteResponse {
  data: {
    is_favorite: boolean;
  };
  message: string;
  status_code: number;
}

export const FavoritesApi = createApi({
  reducerPath: "favoritesApi",
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

  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query<FavoritesResponse, void>({
      query: () => `/my-favorites`,
      providesTags: ["Favorites"],
    }),

    toggleFavorite: builder.mutation<ToggleFavoriteResponse, number>({
      query: (RealStateId) => ({
        url: `/favorites/${RealStateId}`,
        method: "POST",
      }),

      invalidatesTags: ["Favorites"],
    }),
  }),
});

export const { useGetFavoritesQuery, useToggleFavoriteMutation } = FavoritesApi;
