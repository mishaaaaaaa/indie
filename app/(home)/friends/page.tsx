import { server } from "@/lib/serverFetch";
const FriendsPage = async () => {
  // example of fetch in server component

  const data = await server.get("https://jsonplaceholder.typicode.com/todos/1");

  return <div>Here will be friends page {JSON.stringify(data)}</div>;
};

export default FriendsPage;
