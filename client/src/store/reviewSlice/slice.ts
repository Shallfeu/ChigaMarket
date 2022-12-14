import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CreateReview, DeleteReview } from "./actions";

export interface IReview {
  _id: string;
  userId: string;
  pageId: string;
  content: string;
  created_at: number;
}

type ReviewState = {
  items: IReview[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: ReviewState = {
  items: null,
  loading: false,
  error: null,
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    ReviewsRequested(state) {
      state.loading = true;
    },

    ReviewsReceived(state, { payload }: PayloadAction<[]>) {
      state.loading = false;
      state.items = payload;
    },

    ReviewsRequestedFailed(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreateReview.fulfilled, (state, { payload }) => {
      state.items?.push(payload);
    });

    builder.addCase(DeleteReview.fulfilled, (state, { payload }) => {
      if (state.items)
        state.items = state.items.filter((el) => el._id !== payload);
    });
  },
});

export const { ReviewsRequested, ReviewsReceived, ReviewsRequestedFailed } =
  ReviewSlice.actions;

export default ReviewSlice.reducer;
