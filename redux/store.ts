"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import users from "./features/usersSlice";
import friends from "./features/friendsSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { pokemonApi } from "@/app/api/pokemon/pokemonApi";
export const store = configureStore({
  reducer: {
    users,
    friends,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
