import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateFormData } from "./createProjectSlice";

export const updateFormDataAsync = createAsyncThunk(
  "createProject/updateFormDataAsync",
  async (
    payload: { page: string; data: any },
    { dispatch, rejectWithValue }
  ) => {
    try {
      // Simulate API validation or async processing
      const validatedData = payload.data; // Replace with actual API logic if required
      dispatch(updateFormData({ page: payload.page, data: validatedData }));
    } catch (error) {
      console.error("Error updating form data:", error);
      return rejectWithValue("Failed to update form data");
    }
  }
);
