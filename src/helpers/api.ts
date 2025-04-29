import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: "",
        'Content-Type': 'application/json',
    },
});

try {
    const token = localStorage.getItem("github_access_token");
    
    if (!token && window.location.pathname !== "/") {
        localStorage.clear();
        window.location.href = "/";
    } else if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
} catch (error) {
    console.error("API initialization error:", error);
}

export default api;