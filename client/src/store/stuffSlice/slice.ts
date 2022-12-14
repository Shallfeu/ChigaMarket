// Libs
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Utils
import { CreateProduct, DeleteProduct, UpdateProduct } from "./actions";

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  category: string;
  subcategory: string;
  extra: string;
  brand: string;
  price: number;
  discount: number;
  description: string;
}

interface stuffSliceAtr {
  items: IProduct[] | null;
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
    StuffRequested(state) {
      state.loading = true;
    },

    StuffRequestReceived(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.items = payload;
    },

    StuffRequestFailed(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreateProduct.fulfilled, (state, { payload }) => {
      if (state.items) state.items.push(payload);
    });

    builder.addCase(DeleteProduct.fulfilled, (state, { payload }) => {
      if (state.items)
        state.items = state.items.filter((el) => el._id !== payload);
    });

    builder.addCase(UpdateProduct.fulfilled, (state, { payload }) => {
      if (state.items) {
        const updatedIndex = state.items.findIndex(
          (el) => el._id === payload._id
        );
        state.items[updatedIndex] = { ...payload };
      }
    });
  },
});

export const { StuffRequested, StuffRequestReceived, StuffRequestFailed } =
  stuffSlice.actions;

export default stuffSlice.reducer;
