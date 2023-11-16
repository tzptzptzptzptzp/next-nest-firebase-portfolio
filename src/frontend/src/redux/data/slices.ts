import { createSlice } from "@reduxjs/toolkit";

import { initialData } from "./initializes";

const initialState = {
  data: initialData,
  loading: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
export default dataSlice.reducer;
