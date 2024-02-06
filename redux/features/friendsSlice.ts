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

export const friends = createSlice({
  name: "friends",
  initialState,
  reducers: {
    manipulateFriends: (state, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { manipulateFriends } = friends.actions;
export default friends.reducer;
