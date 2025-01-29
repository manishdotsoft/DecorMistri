import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UpdateProfileState {
  businessName: string;
}

const initialState: UpdateProfileState = {
  businessName: '',
};

const updateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState,
  reducers: {
    setUpdateProfile: (state, action: PayloadAction<UpdateProfileState>) => {
      return { ...state, ...action.payload };
    },
    resetUpdateProfile: () => initialState,
  },
});

export const { setUpdateProfile, resetUpdateProfile } =
  updateProfileSlice.actions;
export default updateProfileSlice.reducer;
