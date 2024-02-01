"use client";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../../redux/store";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { fetchUsers } from "@/redux/services/usersApi";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import axios from "axios";
//import { axiosAuth } from "@/lib/axios";

import { AuthGetApi } from "@/lib/fetchApi";
import { fetchUsersThunk } from "@/redux/features/usersSlice";
import axiosInstance from "@/lib/axios";
//import { testFunc } from "@/lib/test";
//import { cookies } from "next/headers";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useAppSelector((store) => store.users);

  useEffect(() => {
    axiosInstance.get("https://jsonplaceholder.typicode.com/todos/1").then((data) => console.log(data));
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
