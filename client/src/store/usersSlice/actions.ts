// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";
// Services
import userService from "../../services/user.service";
import fileService from "../../services/file.service";
// Utils
import { generateAuthError } from "../../utils/genarateAuthError";
import { UsersRequested, UsersReceived, UsersRequestedFailed } from "./slice";

export const loadUsers = () => async (dispatch: any) => {
  try {
    dispatch(UsersRequested());
    const { content } = await userService.fetchAll();
    dispatch(UsersReceived(content));
  } catch (error: any) {
    dispatch(UsersRequestedFailed(error.message));
  }
};

export const UpdateUserData = createAsyncThunk(
  "users/UpdateUserData",
  async (payload: any, thunkAPI) => {
    try {
      const { content } = await userService.update(payload);
      return content;
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

export const UpdateUserPassword = createAsyncThunk(
  "users/UpdatePassword",
  async (payload: any, thunkAPI) => {
    try {
      const { content } = await userService.updatePassword(payload);
      return content;
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

export const UploadAvatar = createAsyncThunk(
  "users/UploadAvatar",
  async (file: any, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { content } = await fileService.uploadAvatar(formData);
      return content;
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

export const DeleteAvatar = createAsyncThunk(
  "users/DeleteAvatar",
  async (_, thunkAPI) => {
    try {
      const { content } = await fileService.deleteAvatar();
      return content;
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
