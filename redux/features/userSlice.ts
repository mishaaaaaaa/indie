import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  name: string;
  age: number;
  email: string;
};

type InitialState = {
  value: UserState;
};

const initialState = {
  value: {
    name: "",
    age: 0,
    email: "",
  } as UserState,
} as InitialState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    manipulateUser: (state, action: PayloadAction<string>) => {
      return initialState;
    },
    createUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
      };
    },
  },
});

export const { manipulateUser } = user.actions;
export default user.reducer;
