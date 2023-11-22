"use client";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((store) => store.user);
  const friendsList = useAppSelector((store) => store.friends);

  console.log(user);
  console.log(friendsList);
  return <div>Here will be main feed section</div>;
};

export default Feed;
