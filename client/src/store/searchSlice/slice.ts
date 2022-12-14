import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchSliceaAtr {
  searchValue: string;
}

const initialState: SearchSliceaAtr = {
  searchValue: "",
  // categoryId: 0,
  // currentPage: 1,
  // sort: {
  //   name: "популярности",
  //   sortProperty: "",
  //   alpha: "",
  // },
};

const searchSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
