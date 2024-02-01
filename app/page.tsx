import { redirect } from "next/navigation";

export default function App() {
  // const session = use(getSession());
  // const session = useSession();

  // console.log("alskdjalsdjl");
  // console.log(session);

  redirect("/feed");

  //session.data ? redirect("/feed") : redirect("/signin");
}
