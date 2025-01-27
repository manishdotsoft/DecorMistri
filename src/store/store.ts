import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./reducers/signUpSlice";
import logInReducer from "./reducers/loginSlice";
import updateProfileReducer from "./reducers/updateProfileSlice";
import createProjectReducer from "./reducers/createProjectSlice.ts";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    logIn: logInReducer,
    updateProfile: updateProfileReducer,
    createProject: createProjectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
