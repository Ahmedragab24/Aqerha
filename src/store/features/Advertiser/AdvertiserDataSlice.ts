// store/slices/countrySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RealEstesUser } from "@/types/Real-estates";

interface AdvertiserDataState {
  AdvertiserData: RealEstesUser;
}

const initialState: AdvertiserDataState = {
  AdvertiserData: {
    id: null,
    name: "",
    image: "",
    email: "",
    phone: "",
    city: "",
    membership_type: "",
    location: "",
    identity_id: "",
    status: false,
    type: "",
    email_verified_at: "",
    latitude: "",
    longitude: "",
    nation_id: "",
    user_package_status: "",
    profile: null,
    reviews: [],
    ads: [],
  },
};

const AdvertiserDataSlice = createSlice({
  name: "Advertiser",
  initialState,
  reducers: {
    setAdvertiserData: (state, action: PayloadAction<RealEstesUser>) => {
      state.AdvertiserData = action.payload;
    },
  },
});

export const { setAdvertiserData } = AdvertiserDataSlice.actions;
export default AdvertiserDataSlice.reducer;
