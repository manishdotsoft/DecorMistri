import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./reducers/signUpSlice";
import logInReducer from "./reducers/loginSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    logIn: logInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
