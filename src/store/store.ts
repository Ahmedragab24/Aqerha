import { configureStore } from "@reduxjs/toolkit";
import navbarBgReducer from "./features/navbarBg/navbarBgSlice";
import subscriptionTypeReducer from "./features/Toggle/subscriptionToggleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navbarBg: navbarBgReducer,
      subscriptionType: subscriptionTypeReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
