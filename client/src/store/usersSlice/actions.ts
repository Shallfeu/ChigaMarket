import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";
import { generateAuthError } from "../../utils/genarateAuthError";
import {
  UsersRequested,
  UsersReceived,
  UsersRequestedFailed,
  UpdateUsers,
} from "./slice";

const CreateUserRequestFailed = createAction("users/CreateUserRequestFailed");

export const loadUsers = () => async (dispatch: any) => {
  try {
    dispatch(UsersRequested());
    const { content } = await userService.fetchAll();
    dispatch(UsersReceived(content));
  } catch (error: any) {
    dispatch(UsersRequestedFailed(error.message));
  }
};

export const UpdateData = (data: any) => async (dispatch: any) => {
  try {
    const { content } = await userService.update(data);
    dispatch(UpdateUsers(content));
  } catch (error) {
    dispatch(CreateUserRequestFailed());
  }
};

export const UpdatePassword = createAsyncThunk(
  "users/UpdatePassword",
  async (data: any, thunkAPI) => {
    try {
      const { content } = await userService.updatePassword(data);
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
