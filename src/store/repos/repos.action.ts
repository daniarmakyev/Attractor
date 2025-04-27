import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../helpers/api";

export const getPublicRepos = createAsyncThunk(
  "repos/getRepos",
  async ({ page = 1, per_page = 10 }: { page?: number; per_page?: number } = {}) => {
    try {
      const response = await api.get("/user/repos", {
        params: {
          type: "public",
          page,
          per_page,
          timestamp: new Date().getTime(),
        },
      });
      return response.data;
    } catch (error) {
      console.error("getRepos error:", error);
      throw error;
    }
  }
);

export const getPrivateRepos = createAsyncThunk(
  "repos/getPrivateRepos",
  async ({ page = 1, per_page = 10 }: { page?: number; per_page?: number } = {}) => {
    try {
      const response = await api.get("/user/repos", {
        params: {
          type: "private",
          page,
          per_page,
          sort: "updated",
          timestamp: new Date().getTime(),
        },
      });
      
      return response.data;
    } catch (error) {
      console.error("getPrivateRepos error:", error);
      throw error;
    }
  }
);