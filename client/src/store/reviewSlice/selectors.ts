import { RootState } from "../store";

export const getReviews = () => (state: RootState) => state.reviews.items;

export const getReviewsLoading = () => (state: RootState) =>
  state.reviews.loading;

export const getReviewById = (reviewId: string) => (state: RootState) => {
  const { items } = state.reviews;
  if (items) {
    return items.find((el) => el._id === reviewId);
  }
  return null;
};
