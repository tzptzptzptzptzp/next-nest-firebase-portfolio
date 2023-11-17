import { useEffect } from "react";

import { useAppDispatch } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slice/themeSlice";
import { fetchAllData } from "@/redux/data/operations";

export const useInitialize = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const setInitialColorMode = () => {
      const getInitialColorMode = () => {
        const storedPreferenceMode = localStorage.getItem("theme");
        const hasStoredPreference = typeof storedPreferenceMode === "string";
        if (hasStoredPreference) {
          return storedPreferenceMode;
        }

        const preference = matchMedia("(prefers-color-scheme): dark");
        const hasMediaQueryPreference = typeof preference.matches === "boolean";
        if (hasMediaQueryPreference) {
          return preference.matches ? "dark" : "light";
        }

        return "light";
      };
      const currentColorMode = getInitialColorMode();
      dispatch(toggleTheme(currentColorMode));
    };
    setInitialColorMode();
    dispatch(fetchAllData());
  }, []);
};

export default useInitialize;
