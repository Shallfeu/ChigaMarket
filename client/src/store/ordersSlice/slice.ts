import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  items: null,
  loading: true,
  error: null,
};

const orderSlice: any = createSlice({
  name: "stuff",
  initialState,
  reducers: {
    OrderRequested(state) {
      state.loading = true;
    },

    OrderRequestReceived(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.items = payload;
    },

    OrderRequestFailed(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { OrderRequested, OrderRequestReceived, OrderRequestFailed } =
  orderSlice.actions;

export default orderSlice.reducer;
