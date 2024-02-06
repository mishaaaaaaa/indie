"use client";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { fetchUsersThunk } from "@/redux/slices/users";

//example of authed remoute API client call with set to redux store
const Feed = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsersThunk(""));
  }, []);

  const handleLogOut = () => {
    signOut();
    console.log(" signOut()");
  };
  return (
    <div>
      <div> Here will be main feed section</div>
      <button className="btn" onClick={handleLogOut}>
        sign out
      </button>
      {JSON.stringify(users)}
      <button className="btn btn-primary" onClick={() => signOut()}>
        Log out
      </button>
    </div>
  );
};

export default Feed;
