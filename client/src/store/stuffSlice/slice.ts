import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  category: {
    general: string;
    subcategory: string;
    extra: string;
  };
  brand: string;
  price: number;
  discount: number;
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
});

export const { StuffRequested, StuffRequestReceived, StuffRequestFailed } =
  stuffSlice.actions;

export default stuffSlice.reducer;
