import { Dispatch } from "@reduxjs/toolkit";
import {
  fetchAllDataFailure,
  fetchAllDataRequest,
  fetchAllDataSuccess,
} from "./actions";
import { getAllData } from "@/utils/api";

export const fetchAllData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchAllDataRequest());
    try {
      const res = await getAllData();
      dispatch(fetchAllDataSuccess(res.data));
    } catch (err) {
      dispatch(fetchAllDataFailure(err));
    }
  };
};
