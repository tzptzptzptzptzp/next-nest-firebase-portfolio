import { GetOrigin } from "./envManager.util";

export const apiManager = (endpoint: string): string => {
  const url = `${GetOrigin()}${endpoint}`;
  return url;
};
