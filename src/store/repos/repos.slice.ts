import { createSlice } from "@reduxjs/toolkit";
import { getPublicRepos, getPrivateRepos } from "./repos.action";

interface ReposState {
    public: [];
    private:[];
    loading: boolean;
    error: string | null;
}

const initialState: ReposState = {
    public: [],
    private:[],
    loading: false,
    error: null,
};

export const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPublicRepos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPublicRepos.fulfilled, (state, action) => {
                state.loading = false;
                state.public = action.payload;
            })
            .addCase(getPublicRepos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
            }).addCase(getPrivateRepos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPrivateRepos.fulfilled, (state, action) => {
                state.loading = false;
                state.private = action.payload;
            })
            .addCase(getPrivateRepos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
            })
    },
});

export default reposSlice.reducer;
