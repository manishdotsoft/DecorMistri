import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignUpState {
  // firstName: string;
  // lastName: string;
  name: string;
  email: string;
  password: string;
  // confirm_password: string;
}

const initialState: SignUpState = {
  // firstName: "",
  // lastName: "",
  name: "",

  email: "",
  password: "",
  // confirm_password: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setSignUpData: (state, action: PayloadAction<SignUpState>) => {
      return { ...state, ...action.payload };
    },
    resetSignUpData: () => initialState,
  },
});

export const { setSignUpData, resetSignUpData } = signUpSlice.actions;
export default signUpSlice.reducer;
