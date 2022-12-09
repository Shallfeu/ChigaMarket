import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../../services/localStorageService";
import { signUp, signIn, logOut } from "./actions";

interface AuthAtr {
  userId: string;
  isLoggedIn: boolean;
}

const user = localStorageService.getAccessToken();

const initialState: AuthAtr = user
  ? { isLoggedIn: true, userId: localStorageService.getUserId() || "" }
  : { isLoggedIn: false, userId: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
    }),
      builder.addCase(signUp.rejected, (state) => {
        state.isLoggedIn = false;
      }),
      builder.addCase(signIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.userId = action.payload.userId;
      }),
      builder.addCase(signIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.userId = "";
      }),
      builder.addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userId = "";
      });
  },
});

export default authSlice.reducer;
