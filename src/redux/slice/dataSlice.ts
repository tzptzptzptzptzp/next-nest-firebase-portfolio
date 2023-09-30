import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: { data: {} },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchData } = dataSlice.actions;
export default dataSlice.reducer;
