import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFormData } from './createProjectSlice';

export const updateFormDataAsync = createAsyncThunk(
  'createProject/updateFormDataAsync',
  async (
    payload: { page: string; data: Record<string, unknown> },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(updateFormData({ page: payload.page, data: payload.data }));
    } catch (error) {
      console.error('Error updating form data:', error);
      return rejectWithValue('Failed to update form data');
    }
  }
);
