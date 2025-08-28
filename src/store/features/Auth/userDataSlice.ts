// store/slices/countrySlice.ts
import { UserData } from "@/types/Auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDataState {
  userData: UserData;
  imageFile: File | null;
}

const initialState: UserDataState = {
  userData: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    city: "",
    membership_type: "property_seeker",
    nation_id: null,
    image: "",
    profile_photo_url: "",
    profile_photo_path: "",
    user_package: "",
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
    setUserData: (state, action: PayloadAction<UserData>) => {
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
