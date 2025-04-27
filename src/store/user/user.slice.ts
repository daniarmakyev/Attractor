import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../helpers/types";
import { getAccesToken } from "./user.action";

const INIT: UserState = {
    user: null,
    repos: [],
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
            localStorage.removeItem("github_access_token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAccesToken.fulfilled, (state, { payload }) => {
            state.accessToken = payload.access_token; 
        });
    }

});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
