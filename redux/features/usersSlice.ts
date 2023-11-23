import { User } from "@/app/models/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../services/usersApi";

type InitialState = {
  users: User[];
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  users: [],
  isLoading: false,
  error: "",
}; // or we can apply type by "as InitialState"

export const user = createSlice({
  name: "users",
  initialState,
  reducers: {
    manipulateUser: (state, action: PayloadAction<string>) => {
      return initialState;
    },
    createUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      };
    },
    usersLoading: (state) => {
      state.isLoading = true;
    },
    usersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    usersFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchUsersThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsersThunk.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [fetchUsersThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  // ниже тот же код но с билдерами, он эквивалентный
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUsersThunk.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchUsersThunk.fulfilled, (state, action) => {
  //       state.users = action.payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(fetchUsersThunk.rejected, (state, action) => {
  //       state.error = action.error.message;
  //       state.isLoading = false;
  //     });
  // },
});

export const { manipulateUser, usersLoading, usersSuccess, usersFail } = user.actions;
export default user.reducer;
