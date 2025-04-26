import { createSlice } from "@reduxjs/toolkit"

const INIT = {
    some: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: INIT,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export default userSlice.reducer