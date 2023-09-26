import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: { value: "en" },
  reducers: {
    toggleLang: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleLang } = langSlice.actions;
export default langSlice.reducer;
