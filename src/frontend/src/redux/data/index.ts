import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "./initialData";

export const dataSlice = createSlice({
  name: "data",
  initialState: initialData,
  reducers: {},
});
