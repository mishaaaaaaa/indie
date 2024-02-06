import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { CookiesOptions } from "next-auth";
import { authConfig } from "@/app/configs/auth";
import { auth } from "@/app/configs/auth";
// import { serverFetch } from "@/lib/serverFetch";
import { server } from "@/lib/serverFetch";
const FriendsPage = async () => {
  //const session = await getServerSession();
  // const cookiesSession = cookies().get("session");
  //console.log(CookiesOptions)
  //const session = await auth();
  //  console.log("jwt: ", session);

  const data = await server.get("https://jsonplaceholder.typicode.com/todos/1");

  // console.log(data);

  return <div>Here will be friends page {JSON.stringify(data)}</div>;
};

export default FriendsPage;
