import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import subscriptionTypeReducer from "./features/Toggle/subscriptionToggleSlice";
import { FilterRealEstateSlice } from "./features/filter/FilterRealEstate";
import AdvertiserDataReducer from "./features/Advertiser/AdvertiserDataSlice";
import userDataReducer from "./features/Auth/userDataSlice";
import { AuthApi } from "./services/Auth";
import { combineReducers } from "@reduxjs/toolkit";
import { HomeApi } from "./services/Home";
import { FavoritesApi } from "./services/Favorites";
import { AuctionsApi } from "./services/Auctions";
import { ServicesApi } from "./services/AuthenticationServices";
import { RealEstateApi } from "./services/RealEstate";
import { FeaturesApi } from "./services/Features";
import { ExaminationAndEvaluationApi } from "./services/Examination&Evaluation";
import { ProjectsApi } from "./services/Projects";
import { DevelopersApi } from "./services/Developers";
import { EngineeringOfficesApi } from "./services/EngineeringOffices";
import PageReducer from "./features/page/pageSlice";
import { RealEstateFilterApi } from "./services/Filters/RealEstateFilter";
import { NewsApi } from "./services/News";
import { ContractingCompanyApi } from "./services/ContractingCompany";
import { NotificationsApi } from "./services/Notifications";
import { CompanyInfoApi } from "./services/CompanyInfo";
import { ChatsApi } from "./services/Chats";
import { PromotionsApi } from "./services/Promotions";
import { GetRequestsApi } from "./services/GetRequests";
import { ProfileApi } from "./services/Profile";
import { PackageApi } from "./services/Package";

const rootReducer = combineReducers({
  userData: userDataReducer,
  subscriptionType: subscriptionTypeReducer,
  FilterRealEstate: FilterRealEstateSlice.reducer,
  AdvertiserData: AdvertiserDataReducer,
  page: PageReducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [ProfileApi.reducerPath]: ProfileApi.reducer,
  [HomeApi.reducerPath]: HomeApi.reducer,
  [FavoritesApi.reducerPath]: FavoritesApi.reducer,
  [AuctionsApi.reducerPath]: AuctionsApi.reducer,
  [ServicesApi.reducerPath]: ServicesApi.reducer,
  [RealEstateApi.reducerPath]: RealEstateApi.reducer,
  [FeaturesApi.reducerPath]: FeaturesApi.reducer,
  [ExaminationAndEvaluationApi.reducerPath]:
    ExaminationAndEvaluationApi.reducer,
  [ProjectsApi.reducerPath]: ProjectsApi.reducer,
  [DevelopersApi.reducerPath]: DevelopersApi.reducer,
  [EngineeringOfficesApi.reducerPath]: EngineeringOfficesApi.reducer,
  [RealEstateFilterApi.reducerPath]: RealEstateFilterApi.reducer,
  [NewsApi.reducerPath]: NewsApi.reducer,
  [ContractingCompanyApi.reducerPath]: ContractingCompanyApi.reducer,
  [NotificationsApi.reducerPath]: NotificationsApi.reducer,
  [CompanyInfoApi.reducerPath]: CompanyInfoApi.reducer,
  [ChatsApi.reducerPath]: ChatsApi.reducer,
  [PromotionsApi.reducerPath]: PromotionsApi.reducer,
  [GetRequestsApi.reducerPath]: GetRequestsApi.reducer,
  [PackageApi.reducerPath]: PackageApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      AuthApi.middleware,
      ProfileApi.middleware,
      HomeApi.middleware,
      FavoritesApi.middleware,
      AuctionsApi.middleware,
      ServicesApi.middleware,
      RealEstateApi.middleware,
      FeaturesApi.middleware,
      ExaminationAndEvaluationApi.middleware,
      ProjectsApi.middleware,
      DevelopersApi.middleware,
      EngineeringOfficesApi.middleware,
      RealEstateFilterApi.middleware,
      NewsApi.middleware,
      ContractingCompanyApi.middleware,
      NotificationsApi.middleware,
      CompanyInfoApi.middleware,
      ChatsApi.middleware,
      PromotionsApi.middleware,
      GetRequestsApi.middleware,
      PackageApi.middleware
    ),
});

export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
