import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://real-time-chat-application-txyb.onrender.com/api",
  withCredentials: true,
});
