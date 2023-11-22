"use client";
import { configureStore } from "@reduxjs/toolkit";
import user from "./features/userSlice";
import friends from "./features/friendsSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    user,
    friends,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
