import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../Services/authService";

// Login API
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await authService.login(loginData);
            return response;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || {
                    success: false,
                    message: "Something went wrong",
                }
            );
        }
    }
);

const initialState = {
    loading: false,
    user: null,
    token: null,
    success: false,
    message: "",
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.success = false;
            state.message = "";
            state.error = null;

            localStorage.removeItem("token");
        },
    },

    extraReducers: (builder) => {
        builder

            // Pending
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // Success
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;

                state.user =
                    action.payload.user ||
                    action.payload.data?.user ||
                    null;

                state.token =
                    action.payload.token ||
                    action.payload.data?.token ||
                    null;

                state.message = action.payload.message || "";

                // Token Save
                if (state.token) {
                    localStorage.setItem("token", state.token);
                }
            })

            // Failed
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
                state.message =
                    action.payload?.message ||
                    "Login Failed";
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;