import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import { generateAuthError } from "../../utils/genarateAuthError";
import { AdminModeSuccess } from "./slice";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const data = await authService.register(payload);
      localStorageService.setTokens(data);
      return { userId: data.userId };
    } catch (error: any) {
      const { code, message } = error.response.data;

      if (code === 400) {
        const errorMessage = generateAuthError(message);
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const data = await authService.login(payload);
      localStorageService.setTokens(data);
      return { userId: data.userId };
    } catch (error: any) {
      const { code, message } = error.response.data;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logOut", async () => {
  localStorageService.removeAuthData();
});

export const AdminMode = (dispatch: any) => {
  dispatch(AdminModeSuccess());
};
