import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EmployeeService from "../../Services/volunteerService";

// ==========================
// Add Employee
// ==========================
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await EmployeeService.addEmployee(formData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message || "Something went wrong",
        }
      );
    }
  }
);

const initialState = {
  loading: false,
  employee: null,
  error: null,
  success: false,
};

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    clearEmployeeState: (state) => {
      state.loading = false;
      state.employee = null;
      state.error = null;
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      // Success
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload;
        state.success = true;
      })

      // Error
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { clearEmployeeState } = employeeSlice.actions;

export default employeeSlice.reducer;