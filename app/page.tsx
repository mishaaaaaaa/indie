"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
export default function App() {
  const session = useSession();
  console.log(session);

  session.data ? redirect("/feed") : redirect("/signin");
}
