import { dataType } from "@/types/data.type";

export const FETCH_ALL_DATA_REQUEST = "FETCH_ALL_DATA_REQUEST";
export const FETCH_ALL_DATA_SUCCESS = "FETCH_ALL_DATA_SUCCESS";
export const FETCH_ALL_DATA_FAILURE = "FETCH_ALL_DATA_FAILURE";

export const fetchAllDataRequest = () => ({
  type: FETCH_ALL_DATA_REQUEST,
});

export const fetchAllDataSuccess = (data: dataType) => ({
  type: FETCH_ALL_DATA_SUCCESS,
  payload: data,
});

export const fetchAllDataFailure = (err: unknown) => ({
  type: FETCH_ALL_DATA_FAILURE,
  payload: err,
});
