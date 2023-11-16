import axios from "axios";
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "./slices";
import { Dispatch } from "@reduxjs/toolkit";

export const fetchData = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataStart());
  try {
    const res = await axios.get("localhost:8080/mock");
    dispatch(fetchDataSuccess(res.data));
  } catch (err) {
    dispatch(fetchDataFailure());
  }
};
