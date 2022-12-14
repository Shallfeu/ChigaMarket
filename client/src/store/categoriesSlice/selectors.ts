import { RootState } from "../store";

export const getAllCategories = (state: RootState) => state.categories.items;

export const getCategoryLoadingStatus = (state: RootState) =>
  state.categories.loading;
