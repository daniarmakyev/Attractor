import axios from "axios";

const token = localStorage.getItem("github_access_token");

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
