import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    email: "",
    Password: "",
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {
        loginUser: (state, action) => {
            // state.email = action.payload.email;
            // state.password = action.payload.password;
            state.isAuthenticated = true;
        },

        logoutUser: (state) => {
            state.email = "";
            state.password = "";
            state.isAuthenticated = false;
        },
    },
})

export const { loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer
