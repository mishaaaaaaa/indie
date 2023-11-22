import { redirect } from "next/navigation";
import Feed from "./feed/page";

export default function App() {
  redirect("/feed");
}
