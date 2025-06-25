import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NavbarBgState {
  navbarBg: boolean;
}

const initialState: NavbarBgState = {
  navbarBg: false,
};

export const navbarBgSlice = createSlice({
  name: "navbarBg",
  initialState,
  reducers: {
    changeBg: (state, action: PayloadAction<boolean>) => {
      state.navbarBg = action.payload;
    },
  },
});

export const { changeBg } = navbarBgSlice.actions;

export const selectCount = (state: RootState) => state.navbarBg;
export default navbarBgSlice.reducer;
