// api/client.ts
import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig {
  headers?: {
    [key: string]: string;
  };
}

const instance = axios.create({
  baseURL: "YOUR_SERVER_BASE_URL",
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: async (data: InternalAxiosRequestConfig) => {
    try {
      const session = await getSession();
      // console.log(session);

      //   if (session?.accessToken) {
      //     // Создаем новый объект конфигурации, чтобы избежать мутации и проблем с типами
      //     const newConfig: InternalAxiosRequestConfig = { ...data };

      //     // Если headers не определены, создаем новый объект headers
      //     newConfig.headers = newConfig.headers || {};

      //     // Добавляем токен авторизации к заголовкам
      //     newConfig.headers["Authorization"] = `Bearer ${session.accessToken}`;

      //     return newConfig;
      //   }

      return data;
    } catch (error) {
      console.error("Ошибка при получении сессии:", error);
      return Promise.reject(error);
    }
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
