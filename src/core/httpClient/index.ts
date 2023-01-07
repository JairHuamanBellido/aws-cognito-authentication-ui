import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.AWS_COGNITO_AUTH_URL,
});

export default httpClient;
