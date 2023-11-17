import axios, { AxiosResponse, Method } from "axios";

import { apiManager } from "@/utils/apiManager.util";

export const apiClient = async (
  method: Method,
  endpoint: string,
  data?: unknown
): Promise<AxiosResponse> => {
  if (method === "get" || method === "delete") {
    return await axios({
      method,
      url: `${apiManager(endpoint)}`,
    });
  } else {
    return await axios({
      method,
      url: `${apiManager(endpoint)}`,
      data,
    });
  }
};
