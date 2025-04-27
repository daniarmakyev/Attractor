import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../helpers/types";
import { getAccesToken, getUser, updatetUser } from "./user.action";

const INIT: UserState = {
    user: null,
    accessToken: null,
    loading: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: INIT,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.error = null;
            localStorage.removeItem("github_access_token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAccesToken.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAccesToken.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload?.access_token || null;
            })
            .addCase(getAccesToken.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
                state.accessToken = null;
            }).addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload || null;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
            })
            .addCase(updatetUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatetUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload || null;
            })
            .addCase(updatetUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;