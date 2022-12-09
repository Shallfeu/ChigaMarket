import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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

    ReviewCreateRequestSuccess(state, { payload }: PayloadAction<IReview>) {
      state.items?.push(payload);
    },

    ReviewCreateRequestFailed(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },

    ReviewDeleteRequestSuccess(state, { payload }: PayloadAction<string>) {
      if (state.items)
        state.items = state.items.filter((el) => el._id !== payload);
    },

    ReviewDeleteRequestFailed(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
  },
});

export const {
  ReviewsRequested,
  ReviewsReceived,
  ReviewsRequestedFailed,
  ReviewCreateRequestSuccess,
  ReviewCreateRequestFailed,
  ReviewDeleteRequestSuccess,
  ReviewDeleteRequestFailed,
} = ReviewSlice.actions;

export default ReviewSlice.reducer;
