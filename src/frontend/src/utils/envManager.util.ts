const DEVELOPMENT_ORIGIN = "http://localhost:8080/";

export type Env = "development" | "production";

export const GetOrigin = (): string => {
  if (process.env.NODE_ENV === "development") {
    return DEVELOPMENT_ORIGIN;
  }

  return process.env.NEXT_PUBLIC_PRODUCTION_ORIGIN!;
};
