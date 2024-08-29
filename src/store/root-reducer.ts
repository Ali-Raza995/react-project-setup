import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import chatbotSlice from "./chatbot/chatbot-slice";
import loaderSlice from "./loader/loader-slice";
import documentUploadSlice from "./chatbot/create-assistent-slice";

const rootReducer = combineReducers({
  auth: authSlice,
  chatBot: chatbotSlice,
  documentsUpload: documentUploadSlice,
  loader: loaderSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;