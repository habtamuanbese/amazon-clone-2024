import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazonapi-oe4e.onrender.com/",

});

export { axiosInstance };
