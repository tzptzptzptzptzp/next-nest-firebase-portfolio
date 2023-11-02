import { toast } from "react-toastify";

export const notification = (
  type: "info" | "success" | "error",
  text: string,
  closeTiming?: number,
  hideProgressBar?: boolean
) => {
  switch (type) {
    case "info":
      return toast.info(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar,
        progress: undefined,
      });
    case "success":
      return toast.success(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar,
        progress: undefined,
      });
    case "error":
      return toast.error(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar,
        progress: undefined,
      });
    default:
      return toast.info(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar,
        progress: undefined,
      });
  }
};
