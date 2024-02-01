import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8000";

// Функция для получения access token из куки
const getAccessToken = () => Cookies.get("access_token");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Перехватываем запросы и добавляем access token к заголовкам
axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  console.log(axiosInstance.interceptors.request.use);
  console.log(accessToken);
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
