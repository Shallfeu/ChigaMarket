import { RootState } from "../store";

export const selectSort = (state: RootState) => state.search;
export const selectSearch = (state: RootState) => state.search.searchValue;
