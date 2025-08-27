import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  page: number;
  per_page: number;
}

const initialState: PageState = {
  page: 1,
  per_page: 12,
};

const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.per_page = action.payload;
    },
  },
});

export const { setPage, setPerPage } = PageSlice.actions;
export default PageSlice.reducer;
