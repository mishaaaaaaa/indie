"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppLayout from "./AppLayout";

// import "styles/App.css";
// import "styles/Contact.css";
// import "styles/MiniCalendar.css";
// import "styles/index.css";

// import dynamic from 'next/dynamic';

// const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

// const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
//   ssr: false,
// });

export default function AppWrapper({ children }: { children: ReactNode }) {
  // this is a HOC where will be redux & translation & themes

  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  );
}
