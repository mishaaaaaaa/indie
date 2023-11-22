"use client";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { useSession, signIn, signOut } from "next-auth/react";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((store) => store.user);
  const friendsList = useAppSelector((store) => store.friends);

  const session = useSession();
  console.log(session);
  return (
    <div>
      <div> Here will be main feed section</div>

      <button className="btn btn-primary" onClick={() => signOut()}>
        Log out
      </button>
    </div>
  );
};

export default Feed;
