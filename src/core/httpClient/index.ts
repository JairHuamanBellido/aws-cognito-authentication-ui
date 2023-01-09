import axios from "axios";
import { getCookie } from "cookies-next";
const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AWS_COGNITO_AUTH_URL,
});

httpClient.interceptors.request.use((config) => {
  const access_token = getCookie("access_token") || "";
  config.headers = {
    Authorization: `Bearer ${access_token}`,
  };
  return config;
});

export default httpClient;
