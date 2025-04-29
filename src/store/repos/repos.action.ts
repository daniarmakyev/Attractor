import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../helpers/api";

export const getPublicRepos = createAsyncThunk(
    "repos/getRepos",
    async () => {
        try {
            const response = await api.get("/user/repos", {
                params: {
                    visibility: 'public',
                    affiliation: 'owner,collaborator,organization_member',
                    sort: 'updated',
                    direction: 'desc',
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
    async () => {
        try {
            const response = await api.get("/user/repos", {
                params: {
                    visibility: 'private',
                    sort: 'updated',
                    direction: 'desc',
                },
                headers: {
                    Accept: 'application/vnd.github+json'
                }
            });
            return response.data;
        } catch (error: any) {
            console.error("getPrivateRepos error:", error.response?.data || error.message);
            throw error;
        }
    }
);