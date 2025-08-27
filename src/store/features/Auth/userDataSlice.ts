// store/slices/countrySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileType } from "@/types/Profile";

interface UserDataState {
  userData: ProfileType;
  imageFile: File | null;
}

const initialState: UserDataState = {
  userData: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    city: "",
    membership_type: "",
    nation_id: null,
    image: "",
    user_package_status: "",
    type: "",
    longitude: "",
    latitude: "",
    identity_id: "",
    email_verified_at: "",
    status: true,
    location: "",
    address: "",
    description: "",
    reviews: [],
    projects: [],
    ads: [],
    profile: {
      id: 0,
      user_id: 0,
      name: "",
      address: "",
      phone: "",
      whatsapp: "",
      image: "",
      license_number: "",
      commercial_registration_number: "",
      services: [],
      brochure: null,
      description: "",
      service: "",
      protfolio_link: "",
      created_at: "",
    },
  },
  imageFile: null,
};

const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.userData.phone = action.payload;
    },
    setUserImageFile: (state, action: PayloadAction<File>) => {
      state.imageFile = action.payload;
    },
    setUserLogoImage: (state, action: PayloadAction<string>) => {
      state.userData.image = action.payload;
    },
    setUserData: (state, action: PayloadAction<ProfileType>) => {
      state.userData = action.payload;
    },
    removeData: (state) => {
      state.userData = initialState.userData;
      state.imageFile = null;
    },
  },
});

export const {
  setUserData,
  setPhone,
  setUserImageFile,
  setUserLogoImage,
  removeData,
} = UserDataSlice.actions;
export default UserDataSlice.reducer;
