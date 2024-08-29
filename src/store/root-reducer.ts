import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import loaderSlice from "./loader/loader-slice";

const rootReducer = combineReducers({
  auth: authSlice,
  loader: loaderSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;