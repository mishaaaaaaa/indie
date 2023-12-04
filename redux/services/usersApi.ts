import { AppDispatch } from "../store";
import { usersLoading, usersSuccess, usersFail } from "../features/usersSlice";
import axios from "axios";
import { User } from "@/app/models/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers = (test: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersLoading());
    const respone = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    dispatch(usersSuccess(respone.data));
  } catch (e: any) {
    dispatch(usersFail(e.message));
  }
};

export const fetchUsersThunk = createAsyncThunk("user/fetchAll", async (param: string, thunkApi) => {
  try {
    const respone = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return respone.data;
  } catch (err) {
    return thunkApi.rejectWithValue(`Error: ${err}`);
  }
});
