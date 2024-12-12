import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazonapi-oe4e.onrender.com",
  // baseURL: "https://amazon-api-deploy-st1d.onrender.com/",
});

export { axiosInstance };
