import type { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SubscriptionType = "monthly" | "yearly";

interface SubscriptionState {
  SubscriptionType: SubscriptionType;
}

const initialState: SubscriptionState = {
  SubscriptionType: "monthly",
};

export const SubscriptionTypeSlice = createSlice({
  name: "subscriptionType",
  initialState,
  reducers: {
    SubscriptionToggle: (state, action: PayloadAction<SubscriptionType>) => {
      state.SubscriptionType = action.payload;
    },
  },
});

export const { SubscriptionToggle } = SubscriptionTypeSlice.actions;

export const selectSubscription = (state: RootState) => state.subscriptionType;

export default SubscriptionTypeSlice.reducer;
