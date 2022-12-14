import { createAsyncThunk } from "@reduxjs/toolkit";
import reviewsService from "../../services/review.service";
import {
  ReviewsRequested,
  ReviewsReceived,
  ReviewsRequestedFailed,
} from "./slice";

export const loadReviews = (pageId: string) => async (dispatch: any) => {
  try {
    dispatch(ReviewsRequested());
    const { content } = await reviewsService.fetchAll(pageId);
    dispatch(ReviewsReceived(content));
  } catch (error: any) {
    dispatch(ReviewsRequestedFailed(error.message));
  }
};

export const CreateReview = createAsyncThunk(
  "reviews/CreateReview",
  async (payload: any, thunkAPI: any) => {
    try {
      const { content } = await reviewsService.create({
        content: payload.content,
        userId: thunkAPI.getState().auth.userId,
        pageId: payload.pageId,
      });
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const DeleteReview = createAsyncThunk(
  "reviews/DeleteReview",
  async (payload: any, thunkAPI: any) => {
    try {
      await reviewsService.remove(payload);
      return payload;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
