import axios from "axios";

const API_BASE_URL = "https://pos-backend-zeta-ten.vercel.app";

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosClient;
