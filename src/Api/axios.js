import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-47800/us-central1/api",

  baseURL: "https://amazon-api-deploy-st1d.onrender.com/",
  // baseURL: "http://localhost:5001"
});

export { axiosInstance };
