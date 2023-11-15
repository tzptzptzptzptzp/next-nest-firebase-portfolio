import { createSlice } from "@reduxjs/toolkit";

import { initialData } from "../data/initialData";

export const dataSlice = createSlice({
  name: "data",
  initialState: { data: initialData },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchData } = dataSlice.actions;
export default dataSlice.reducer;
