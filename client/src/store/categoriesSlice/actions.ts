import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../../services/category.service";
import {
  CategoryRequested,
  CategoryRequestReceived,
  CategoryRequestFailed,
} from "./slice";

export const loadCategories = () => async (dispatch: any) => {
  try {
    dispatch(CategoryRequested());
    const { content } = await categoryService.fetchAll();
    dispatch(CategoryRequestReceived(content));
  } catch (error: any) {
    dispatch(CategoryRequestFailed(error.message));
  }
};

export const CreateSubcategory = createAsyncThunk(
  "categories/CreateSubcategory",
  async (payload: { category: string; subcategory: string }, thunkAPI) => {
    try {
      const { content } = await categoryService.create(payload);
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const DeleteSubcategory = createAsyncThunk(
  "categories/DeleteSubcategory",
  async (payload: { category: string; subcategories: any }, thunkAPI) => {
    try {
      const { content } = await categoryService.delete(payload);
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
