"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
export default function App() {
  const session = useSession();

  //session.data ? redirect("/feed") : redirect("/signin");
}
