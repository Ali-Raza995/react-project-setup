import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { useNavigate } from "react-router-dom";
import Toast from "../components/shared/toast";
import { ROUTE_CONSTANTS } from "../routes/route-constants";

const baseURL = "http://localhost:5000/api"

const api: AxiosInstance = axios.create({
  baseURL,
});

// Authorization header with the access token
api.interceptors.request.use(
  (config) => {
    const userSession = JSON.parse(
      localStorage.getItem("session") || "{}"
    );
    if (userSession?.token) {
      config.headers.Authorization = `Bearer ${userSession?.token}`;
    }
    return config;
  },
  (error) => {
    console.error("Error sending request:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.message === "Unauthorized"
    ) {
      localStorage.removeItem("user");
      window.location.href = ROUTE_CONSTANTS.LOGIN;
    } else {
      return Promise.reject(error);
    }
  }
);

export const requestApi = async <T = any>(
  config: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.request<T>(config);
  return response.data;
};

export const getApi = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get<T>(url, config);
  return response.data;
};

export const getApiWithParams = async <T = any>(
  url: string,
  paramsArr: { key: string; value: string }[] = [],
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const params = new URLSearchParams();
  paramsArr.forEach((param) => {
    if (param.value) {
      params.append(param.key, param.value);
    }
  });

  const response: AxiosResponse<T> = await api.get<T>(url, {
    params,
    ...config,
  });
  return response;
};

export const postApi = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.post<T>(url, data, config);
  return response.data;
};

export const putApi = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.put<T>(url, data, config);
  return response.data;
};

export const patchApi = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.patch<T>(url, data, config);
  return response.data;
};

export const delApi = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.delete<T>(url, config);
  return response.data;
};