import { Dispatch } from "@reduxjs/toolkit";

import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "./slices";
import { API } from "@/config/api";
import { apiClient } from "@/libs/apiClient.lib";

export const fetchAllData = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataStart());
  try {
    const res = apiClient("get", API.MOCK_DATA);
    dispatch(fetchDataSuccess((await res).data));
  } catch (err) {
    dispatch(fetchDataFailure());
  }
};
