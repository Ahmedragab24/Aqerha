import { getAuthTokenClient } from "@/lib/auth/auth-client";
import {
  AssetsType,
  AuctionType,
  BiddingActivityType,
  EnrollAndOfferType,
  TypeAuctionCategoryType,
  TypeAuctionType,
} from "@/types/Actions";
import {
  LinksType,
  MessageType,
  MetaType,
  StatusCodeType,
} from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AuctionsResponse {
  data: AuctionType[];
  links: LinksType;
  meta: MetaType;
  message: MessageType;
  status_code: StatusCodeType;
}
interface StoreAuctionResponse {
  data: AuctionType;
  message: MessageType;
  status_code: StatusCodeType;
}
interface ToggleFollowResponse {
  data: {
    id: number;
    user_id: number;
    auction_id: number;
    asset_id: string;
    updated_at: string;
    created_at: string;
  };

  message: MessageType;
  status_code: StatusCodeType;
}
interface AuctionsByUserResponse {
  data: AuctionType[];
  message: MessageType;
  status_code: StatusCodeType;
}
interface AuctionByIdResponse {
  data: {
    auction: AuctionType;
    bidding_activity: BiddingActivityType[];
    highest_offer: string;
    bidders_count: number;
  };
  message: MessageType;
  status_code: StatusCodeType;
}
interface AssetByIdResponse {
  data: {
    asset: AssetsType;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

export const AuctionsApi = createApi({
  reducerPath: "AuctionsApi",
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

  tagTypes: ["Auctions", "Action", "Asset"],
  endpoints: (builder) => ({
    getAllAuctions: builder.query<
      AuctionsResponse,
      {
        page?: number;
        per_page?: number;
        category?: TypeAuctionCategoryType | "all";
        type?: TypeAuctionType | "all";
      }
    >({
      query: ({ page, per_page, category, type }) => {
        const params = new URLSearchParams();

        if (type) params.append("type", type);
        if (category) params.append("category", category);
        if (page) params.append("page", String(page));
        if (per_page) params.append("per_page", String(per_page));

        return `/auctions?${params.toString()}`;
      },
      providesTags: ["Auctions"],
    }),

    getAuctionById: builder.query<AuctionByIdResponse, number>({
      query: (auctionId) => {
        return `/auctions/${auctionId}`;
      },
      providesTags: ["Action"],
    }),

    getAssetById: builder.query<AssetByIdResponse, number>({
      query: (assetId) => {
        return `/asset/${assetId}`;
      },
      providesTags: ["Asset"],
    }),

    getAuctionsByUser: builder.query<AuctionsByUserResponse, void>({
      query: () => {
        return `/user/auctions`;
      },
      providesTags: ["Auctions"],
    }),

    StoreAuction: builder.mutation<StoreAuctionResponse, FormData>({
      query: (body) => ({
        url: `/auctions`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auctions"],
    }),

    StoreAuctionAssets: builder.mutation<StoreAuctionResponse, FormData>({
      query: (body) => ({
        url: `/auctions/asset`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auctions", "Asset"],
    }),

    EnrollAndOffer: builder.mutation<StoreAuctionResponse, EnrollAndOfferType>({
      query: (body) => ({
        url: `/auctions/bid`,
        method: "POST",
        body,
      }),
    }),

    ToggleFollowAsset: builder.mutation<
      ToggleFollowResponse,
      { asset_id: number }
    >({
      query: (body) => ({
        url: `/toggle-follow-asset`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllAuctionsQuery,
  useGetAuctionByIdQuery,
  useGetAuctionsByUserQuery,
  useGetAssetByIdQuery,
  useEnrollAndOfferMutation,
  useStoreAuctionAssetsMutation,
  useStoreAuctionMutation,
  useToggleFollowAssetMutation,
} = AuctionsApi;
