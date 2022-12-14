import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CreateSubcategory, DeleteSubcategory } from "./actions";

export interface ICategory {
  _id: string;
  category: string;
  subcategories: { _id: string; category: string }[];
  image: string;
}

interface stuffSliceAtr {
  items: ICategory[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: stuffSliceAtr = {
  items: null,
  loading: true,
  error: null,
};

const stuffSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    CategoryRequested(state) {
      state.loading = true;
    },

    CategoryRequestReceived(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.items = payload;
    },

    CategoryRequestFailed(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreateSubcategory.fulfilled, (state, { payload }) => {
      if (state.items) {
        const updatedIndex = state.items.findIndex(
          (el) => el._id === payload._id
        );
        state.items[updatedIndex] = { ...payload };
      }
    });
    builder.addCase(DeleteSubcategory.fulfilled, (state, { payload }) => {
      if (state.items) {
        const updatedIndex = state.items.findIndex(
          (el) => el._id === payload._id
        );
        state.items[updatedIndex] = { ...payload };
      }
    });
  },
});

export const {
  CategoryRequested,
  CategoryRequestReceived,
  CategoryRequestFailed,
} = stuffSlice.actions;

export default stuffSlice.reducer;
