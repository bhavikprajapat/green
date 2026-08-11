import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donorService from "../../Services/donorService";

// =====================================================
// GET ALL DONORS
// =====================================================

export const getAllDonors = createAsyncThunk(
  "donor/getAllDonors",
  async (_, { rejectWithValue }) => {
    try {
      const response =
        await donorService.getAllDonors();

      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          success: false,
          message: "Donor list fetch failed",
        }
      );
    }
  }
);

// =====================================================
// ADD DONOR
// =====================================================

export const addDonor = createAsyncThunk(
  "donor/addDonor",
  async (formData, { rejectWithValue }) => {
    try {
      const response =
        await donorService.addDonor(formData);

      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          success: false,
          message: "Donor create failed",
        }
      );
    }
  }
);

// =====================================================
// UPDATE DONOR
// =====================================================

export const updateDonor = createAsyncThunk(
  "donor/updateDonor",
  async (
    { donorUkId, formData },
    { rejectWithValue }
  ) => {
    try {
      const response =
        await donorService.updateDonor(
          donorUkId,
          formData
        );

      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          success: false,
          message: "Donor update failed",
        }
      );
    }
  }
);

// =====================================================
// DELETE DONOR
// =====================================================

export const deleteDonor = createAsyncThunk(
  "donor/deleteDonor",
  async (
    donorUkId,
    { rejectWithValue }
  ) => {
    try {
      const response =
        await donorService.deleteDonor(
          donorUkId
        );

      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          success: false,
          message: "Donor delete failed",
        }
      );
    }
  }
);

// =====================================================
// INITIAL STATE
// =====================================================

const initialState = {
  loading: false,

  donors: [],

  addLoading: false,

  updateLoading: false,

  deleteLoading: false,

  success: false,

  message: "",

  error: null,

  selectedDonor: null,
};

// =====================================================
// SLICE
// =====================================================

const donorSlice = createSlice({
  name: "donor",

  initialState,

  reducers: {
    // ===============================================
    // CLEAR COMMON STATE
    // ===============================================

    clearDonorState: (state) => {
      state.success = false;
      state.message = "";
      state.error = null;
    },

    // ===============================================
    // SET SELECTED DONOR
    // ===============================================

    setSelectedDonor: (
      state,
      action
    ) => {
      state.selectedDonor =
        action.payload;
    },

    // ===============================================
    // CLEAR SELECTED DONOR
    // ===============================================

    clearSelectedDonor: (state) => {
      state.selectedDonor = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // =================================================
      // GET ALL DONORS
      // =================================================

      .addCase(
        getAllDonors.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        getAllDonors.fulfilled,
        (state, action) => {
          state.loading = false;

          state.donors =
            action.payload?.data || [];

          state.error = null;
        }
      )

      .addCase(
        getAllDonors.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.payload?.message ||
            "Donor list fetch failed";
        }
      )

      // =================================================
      // ADD DONOR
      // =================================================

      .addCase(
        addDonor.pending,
        (state) => {
          state.addLoading = true;

          state.success = false;
          state.error = null;
          state.message = "";
        }
      )

      .addCase(
        addDonor.fulfilled,
        (state, action) => {
          state.addLoading = false;

          state.success =
            action.payload?.success !== false;

          state.message =
            action.payload?.message ||
            "Donor created successfully";

          state.error = null;

          // API donor return કરે તો list માં add કરો
          if (action.payload?.data) {
            state.donors.push(
              action.payload.data
            );
          }
        }
      )

      .addCase(
        addDonor.rejected,
        (state, action) => {
          state.addLoading = false;

          state.success = false;

          state.error =
            action.payload?.message ||
            "Donor create failed";

          state.message =
            action.payload?.message || "";
        }
      )

      // =================================================
      // UPDATE DONOR
      // =================================================

      .addCase(
        updateDonor.pending,
        (state) => {
          state.updateLoading = true;

          state.success = false;

          state.error = null;

          state.message = "";
        }
      )

      .addCase(
        updateDonor.fulfilled,
        (state, action) => {
          state.updateLoading = false;

          state.success =
            action.payload?.success !== false;

          state.message =
            action.payload?.message ||
            "Donor updated successfully";

          state.error = null;

          // ============================================
          // UPDATED DONOR
          // ============================================

          const updatedDonor =
            action.payload?.data;

          if (updatedDonor) {
            const index =
              state.donors.findIndex(
                (donor) =>
                  donor.DonorUkId ===
                  updatedDonor.DonorUkId
              );

            if (index !== -1) {
              state.donors[index] =
                updatedDonor;
            } else {
              // अगर list में नहीं है
              state.donors.push(
                updatedDonor
              );
            }

            state.selectedDonor =
              updatedDonor;
          }
        }
      )

      .addCase(
        updateDonor.rejected,
        (state, action) => {
          state.updateLoading = false;

          state.success = false;

          state.error =
            action.payload?.message ||
            "Donor update failed";

          state.message =
            action.payload?.message || "";
        }
      )

      // =================================================
      // DELETE DONOR
      // =================================================

      .addCase(
        deleteDonor.pending,
        (state) => {
          state.deleteLoading = true;

          state.success = false;

          state.error = null;

          state.message = "";
        }
      )

      .addCase(
        deleteDonor.fulfilled,
        (state, action) => {
          state.deleteLoading = false;

          state.success =
            action.payload?.success !== false;

          state.message =
            action.payload?.message ||
            "Donor deleted successfully";

          state.error = null;

          // ============================================
          // DELETE FROM REDUX LIST
          // ============================================

          const deletedDonorUkId =
            action.meta.arg;

          state.donors =
            state.donors.filter(
              (donor) =>
                donor.DonorUkId !==
                deletedDonorUkId
            );

          state.selectedDonor = null;
        }
      )

      .addCase(
        deleteDonor.rejected,
        (state, action) => {
          state.deleteLoading = false;

          state.success = false;

          state.error =
            action.payload?.message ||
            "Donor delete failed";

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
  clearDonorState,
  setSelectedDonor,
  clearSelectedDonor,
} = donorSlice.actions;

// =====================================================
// REDUCER
// =====================================================

export default donorSlice.reducer;