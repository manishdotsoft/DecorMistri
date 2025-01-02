// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "logIn",
  initialState,
  reducers: {
    setLoginData(state, action: PayloadAction<LoginState>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setLoginData } = authSlice.actions;

export default authSlice.reducer;
