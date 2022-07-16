import axios from "axios";

const baseRoute = "http://localhost:8000"
const axiosBase = axios.create({
  baseURL: baseRoute,
  withCredentials:true,
  accesscontrolalloworigin: "*",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
