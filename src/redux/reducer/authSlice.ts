import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {

  _id: string;
  email: string;
  name: string;
  google_id:string
  photo:string;
  isVerified:boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthState {
  user: User | null;
  loader: boolean;
  isAdmin: boolean;
}

const initialState: AuthState = {
  user: null,
  loader: true,
  isAdmin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userExited: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loader = false;
    },
    userNotExited: (state) => {
      state.user = null;
      state.loader = false;
    },
  },
});

export default authSlice;

export const { userExited, userNotExited } = authSlice.actions;