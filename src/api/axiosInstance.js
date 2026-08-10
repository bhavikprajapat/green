import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://green-army-api.myeventz.in",
    timeout: 30000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;