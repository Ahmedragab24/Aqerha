import { configureStore } from "@reduxjs/toolkit";
import navbarBgReducer from "./features/navbarBg/navbarBgSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navbarBg: navbarBgReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
