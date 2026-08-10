import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donorService from "../../Services/donorService";


// ============================
// GET ALL DONORS
// ============================

export const getAllDonors = createAsyncThunk(
    "donor/getAllDonors",
    async (_, { rejectWithValue }) => {

        try {

            const response = await donorService.getAllDonors();

            return response;

        } catch (error) {

            return rejectWithValue(
                error.response?.data || {
                    success: false,
                    message: "Donor list fetch failed"
                }
            );
        }
    }
);


// ============================
// ADD DONOR
// ============================

export const addDonor = createAsyncThunk(
    "donor/addDonor",
    async (formData, { rejectWithValue }) => {

        try {

            const response = await donorService.addDonor(formData);

            return response;

        } catch (error) {

            return rejectWithValue(
                error.response?.data || {
                    success: false,
                    message: "Donor create failed"
                }
            );
        }
    }
);


const initialState = {

    loading: false,

    donors: [],

    addLoading: false,

    success: false,

    message: "",

    error: null
};


const donorSlice = createSlice({

    name: "donor",

    initialState,

    reducers: {

        clearDonorState: (state) => {

            state.success = false;
            state.message = "";
            state.error = null;

        }

    },

    extraReducers: (builder) => {

        builder

            // ============================
            // GET DONORS
            // ============================

            .addCase(getAllDonors.pending, (state) => {

                state.loading = true;
                state.error = null;

            })

            .addCase(getAllDonors.fulfilled, (state, action) => {

                state.loading = false;

                state.donors =
                    action.payload?.data || [];

            })

            .addCase(getAllDonors.rejected, (state, action) => {

                state.loading = false;

                state.error =
                    action.payload?.message ||
                    "Donor list fetch failed";

            })


            // ============================
            // ADD DONOR
            // ============================

            .addCase(addDonor.pending, (state) => {

                state.addLoading = true;

                state.success = false;

                state.error = null;

            })

            .addCase(addDonor.fulfilled, (state, action) => {

                state.addLoading = false;

                state.success = true;

                state.message =
                    action.payload?.message ||
                    "Donor created successfully";

            })

            .addCase(addDonor.rejected, (state, action) => {

                state.addLoading = false;

                state.success = false;

                state.error =
                    action.payload?.message ||
                    "Donor create failed";

            });

    }

});


export const {
    clearDonorState
} = donorSlice.actions;


export default donorSlice.reducer;