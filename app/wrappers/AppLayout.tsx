import React, { ReactNode } from "react";
import "../../styles/App.css";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <div> {children}</div>;
}
