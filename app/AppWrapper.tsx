"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppLayout from "./AppLayout";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "./AuthWrapper";

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthWrapper>
        <Provider store={store}>
          <AppLayout>{children}</AppLayout>
        </Provider>
      </AuthWrapper>
    </SessionProvider>
  );
}
