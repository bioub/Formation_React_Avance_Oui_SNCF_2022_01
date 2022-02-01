import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../posts/api";
import { countReducer, usersReducer } from "./slices";

export const store = configureStore({reducer: {
  count: countReducer,
  users: usersReducer,
  [postApi.reducerPath]: postApi.reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(postApi.middleware),
}});