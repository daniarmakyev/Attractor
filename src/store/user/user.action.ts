import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAccesToken = createAsyncThunk(
    "user/getAccesToken",
    async (code: string) => {
        const response = await axios.get(`http://localhost:3002/auth/github/callback?code=${code}`);
        return response.data;
    }
);
