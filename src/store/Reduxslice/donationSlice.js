import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donationService from "../../Services/donationService";

// =====================================================
// ADD DONATION
// =====================================================

export const addDonation = createAsyncThunk(
    "donation/addDonation",
    async (donationData, { rejectWithValue }) => {
        try {
            const response =
                await donationService.addDonation(
                    donationData
                );

            return response;

        } catch (error) {

            console.error(
                "ADD DONATION API ERROR:",
                error
            );

            return rejectWithValue(
                error.response?.data || {
                    success: false,
                    message: "Donation add કરવામાં સમસ્યા આવી.",
                }
            );
        }
    }
);

// =====================================================
// INITIAL STATE
// =====================================================

const initialState = {
    addLoading: false,
    success: false,
    message: "",
    error: null,
};

// =====================================================
// SLICE
// =====================================================

const donationSlice = createSlice({
    name: "donation",

    initialState,

    reducers: {

        clearDonationState: (state) => {
            state.success = false;
            state.message = "";
            state.error = null;
        },

    },

    extraReducers: (builder) => {

        builder

            // ==========================================
            // ADD DONATION - PENDING
            // ==========================================

            .addCase(
                addDonation.pending,
                (state) => {

                    state.addLoading = true;
                    state.success = false;
                    state.message = "";
                    state.error = null;

                }
            )

            // ==========================================
            // ADD DONATION - SUCCESS
            // ==========================================

            .addCase(
                addDonation.fulfilled,
                (state, action) => {

                    state.addLoading = false;
                    state.success = true;

                    state.message =
                        action.payload?.message ||
                        "Donation successfully add થયું.";

                    state.error = null;

                }
            )

            // ==========================================
            // ADD DONATION - ERROR
            // ==========================================

            .addCase(
                addDonation.rejected,
                (state, action) => {

                    state.addLoading = false;
                    state.success = false;

                    state.error =
                        action.payload?.message ||
                        "Donation add કરવામાં સમસ્યા આવી.";

                    state.message =
                        action.payload?.message || "";

                }
            );
    },
});

// =====================================================
// ACTIONS
// =====================================================

export const {
    clearDonationState,
} = donationSlice.actions;

// =====================================================
// REDUCER
// =====================================================

export default donationSlice.reducer;