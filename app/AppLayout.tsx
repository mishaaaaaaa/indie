import React, { ReactNode } from "react";
import "../styles/App.css";

export default function AppLayout({ children }: { children: ReactNode }) {
  //general  layout for app

  // console.log(children);

  return <div>{children}</div>;
}
