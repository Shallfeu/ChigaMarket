import { createAction } from "@reduxjs/toolkit";
import reviewsService from "../../services/reviewService";
import {
  ReviewsRequested,
  ReviewsReceived,
  ReviewsRequestedFailed,
  ReviewCreateRequestSuccess,
  ReviewCreateRequestFailed,
  ReviewDeleteRequestSuccess,
  ReviewDeleteRequestFailed,
} from "./slice";

const ReviewCreateRequest = createAction("reviews/ReviewCreateRequest");
const ReviewDeleteRequest = createAction("reviews/ReviewDeleteRequest");

export const loadReviews = (pageId: string) => async (dispatch: any) => {
  try {
    dispatch(ReviewsRequested());
    const { content } = await reviewsService.fetchAll(pageId);
    dispatch(ReviewsReceived(content));
  } catch (error: any) {
    dispatch(ReviewsRequestedFailed(error.message));
  }
};

export const createReview =
  (data: any) => async (dispatch: any, getState: any) => {
    const state = getState();
    try {
      dispatch(ReviewCreateRequest());
      const { content } = await reviewsService.create({
        content: data.content,
        userId: state.auth.userId,
        pageId: data.pageId,
      });
      dispatch(ReviewCreateRequestSuccess(content));
    } catch (error: any) {
      dispatch(dispatch(ReviewCreateRequestFailed(error.message)));
    }
  };

export const deleteReview = (id: any) => async (dispatch: any) => {
  try {
    dispatch(ReviewDeleteRequest());
    const { content } = await reviewsService.remove(id);
    dispatch(ReviewDeleteRequestSuccess(id));
    return content;
  } catch (error: any) {
    dispatch(ReviewDeleteRequestFailed(error.message));
  }
};
