import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./advertsSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});

// Типізація RootState та Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
