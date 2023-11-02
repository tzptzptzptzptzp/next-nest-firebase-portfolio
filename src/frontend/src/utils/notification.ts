import { toast } from "react-toastify";

export const notification = (
  type: "info" | "success" | "error",
  text: string,
  closeTiming?: number
) => {
  switch (type) {
    case "info":
      return toast.info(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case "success":
      return toast.success(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case "error":
      return toast.error(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    default:
      return toast.info(text, {
        position: "top-right",
        autoClose: closeTiming ?? 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
};
