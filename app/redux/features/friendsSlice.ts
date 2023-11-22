import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FriendsState = {
  friendsList: [];
};

type InitialState = {
  value: FriendsState;
};

const initialState = {
  value: {
    friendsList: [],
  } as FriendsState,
} as InitialState;

export const user = createSlice({
  name: "friends",
  initialState,
  reducers: {
    manipulateFriends: (state, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { manipulateFriends } = user.actions;
export default user.reducer;
