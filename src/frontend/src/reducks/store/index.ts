import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slice/themeSlice";
import langReducer from "../slice/langSlice";
import dataReducer from "../data/slices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
