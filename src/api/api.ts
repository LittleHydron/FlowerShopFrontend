import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
    baseURL: "https://flowershopbackend.onrender.com",
    withCredentials: true,
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        // If the response is successful (status code 2xx), just return the response
        return response;
    },
    (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
            // Redirect to "/login" if the status code is 401 (Unauthorized)
            localStorage.removeItem("auth-storage");
            window.location.href = "/login";
        }
        // Return a rejected promise to handle the error further down the chain
        return Promise.reject(error);
    }
);
