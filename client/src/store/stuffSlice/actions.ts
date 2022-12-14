import { createAsyncThunk } from "@reduxjs/toolkit";
import fileService from "../../services/file.service";
import stuffService from "../../services/stuff.service";

import {
  StuffRequested,
  StuffRequestReceived,
  StuffRequestFailed,
} from "./slice";

export const loadStuff = () => async (dispatch: any) => {
  try {
    dispatch(StuffRequested());
    const { content } = await stuffService.fetchAll();
    dispatch(StuffRequestReceived(content));
  } catch (error: any) {
    dispatch(StuffRequestFailed(error.message));
  }
};

export const CreateProduct = createAsyncThunk(
  "stuff/CreateProduct",
  async (payload: any, thunkAPI) => {
    try {
      const data = await stuffService.create({ ...payload.data });

      const formData = new FormData();
      formData.append(data.content._id, payload.image);
      const { content } = await fileService.uploadProductImg(formData);
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const UpdateProduct = createAsyncThunk(
  "stuff/UpdateProduct",
  async (payload: any, thunkAPI) => {
    try {
      const { content } = await stuffService.update(payload);
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "stuff/DeleteProduct",
  async (productId: any, thunkAPI) => {
    try {
      await stuffService.delete(productId);
      return productId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const DeleteProductImg = createAsyncThunk(
  "stuff/DeleteProductImg",
  async (_, thunkAPI) => {
    try {
      const { content } = await fileService.deleteProductImg();
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
