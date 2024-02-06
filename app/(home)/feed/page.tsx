"use client";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { fetchUsersThunk } from "@/redux/features/usersSlice";
const Feed = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.users);

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsersThunk(""));
    //  dispatch(fetchUsersThunk(""));
    // axiosAuth.get("https://jsonplaceholder.typicode.com/todos/1").then((resp) => console.log(resp));
    //AuthGetApi("https://jsonplaceholder.typicode.com/todos/1").then((resp) => console.log(resp));
    // console.log(fetchUsersThunk);
  }, []);
  // console.log(users);

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
