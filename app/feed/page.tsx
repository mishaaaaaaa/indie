"use client";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { useSession, signIn, signOut } from "next-auth/react";
import { useGetPokemonByNameQuery } from "../api/pokemon/pokemonApi";
import { useEffect } from "react";
import { fetchUsers, fetchUsersThunk } from "@/redux/services/usersApi";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useAppSelector((store) => store.users);
  const friendsList = useAppSelector((store) => store.friends);
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  // console.log(data);
  const session = useSession();
  // console.log(session);

  useEffect(() => {
    //dispatch(fetchUsers("testProps"));
    dispatch(fetchUsersThunk("k;lk;l"));
    console.log(fetchUsersThunk);
  }, []);
  // console.log(users);
  return (
    <div>
      <div> Here will be main feed section</div>
      {JSON.stringify(users)}
      <button className="btn btn-primary" onClick={() => signOut()}>
        Log out
      </button>
    </div>
  );
};

export default Feed;
