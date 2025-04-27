import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../helpers/types";

export const getAccesToken = createAsyncThunk(
    "user/getAccesToken",
    async (code: string) => {
        try {
            const response = await axios.get(`http://localhost:3002/auth/github/callback?code=${code}`);

            if (response.data.access_token) {
                localStorage.setItem("github_access_token", response.data.access_token);
                return response.data;
            } else if (response.data.error === "bad_verification_code") {
                window.location.href = "/auth/github";
            }
        } catch (error) {
            console.error("Authentication error:", error);
            throw error
        }
    }
);

export const getUser = createAsyncThunk(
    "user/getUser",
    async () => {
        try {
            const token = localStorage.getItem("github_access_token");

            const response = await axios.get("https://api.github.com/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    type: "all",
                    timestamp: new Date().getTime(),
                },
            });

            return response.data;
        } catch (error) {
            console.error("GetUser error" + error);
            throw error
        }
    }
);
export const updatetUser = createAsyncThunk(
    "user/updatetUser",
    async (data: User) => {
        try {
            const token = localStorage.getItem("github_access_token");
            const response = await axios.patch(
                "https://api.github.com/user",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }
);