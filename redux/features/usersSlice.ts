"use client";
import { User } from "@/app/models/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@/lib/axios";

type InitialState = {
  users: User[] | undefined;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: InitialState = {
  users: [],
  isLoading: false,
  error: "",
}; // or we can apply type by "as InitialState"

// const axiosAuth = useAxiosAuth();

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

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const fetchUsersThunk = createAsyncThunk("user/fetchAll", async (param: any, thunkApi) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(`Error: ${err}`);
  }
});

export default user.reducer;
