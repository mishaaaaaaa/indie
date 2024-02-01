import { getServerSession } from "next-auth";

const FriendsPage = async () => {
  const session = await getServerSession();

  console.log(session);
  return <div>Here will be friends page</div>;
};

export default FriendsPage;
