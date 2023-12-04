"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppLayout from "./AppLayout";
import { SessionProvider } from "next-auth/react";

export default function AppWrapper({ children }: { children: ReactNode }) {
  // this is a HOC where will be redux & translation & themes

  return (
    <SessionProvider>
      <Provider store={store}>
        <AppLayout>{children}</AppLayout>
      </Provider>
    </SessionProvider>
  );
}
