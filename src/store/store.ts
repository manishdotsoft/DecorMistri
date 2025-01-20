import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./reducers/signUpSlice";
import logInReducer from "./reducers/loginSlice";
import updateProfileReducer from "./reducers/updateProfileSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    logIn: logInReducer,
    updateProfile: updateProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
