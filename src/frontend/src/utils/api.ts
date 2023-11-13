import axios, { AxiosPromise } from "axios";

export const getAllData = () => {
  return axios({
    method: "GET",
    url: "http://localhost:8080/mock",
  });
};
