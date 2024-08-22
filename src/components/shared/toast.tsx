import { toast, ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

const toastTypes: Record<
  ToastType,
  (message: string, options?: ToastOptions) => void
> = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
  warning: toast.warn,
};

const showToast = (type: ToastType, message: string) => {
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "dark"
  };

  const toastFunc = toastTypes[type];
  if (toastFunc) {
    toastFunc(message, options);
  }
};

export const errorToast = (error: any) => {
  showToast("error", error?.response?.data?.message || "Something went wrong");
};

export default showToast;
