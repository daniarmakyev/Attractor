import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user.slice";
import { reposSlice } from "./repos/repos.slice";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        repos: reposSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

