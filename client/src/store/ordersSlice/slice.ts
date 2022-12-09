import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createOrder } from "./actions";
// Types

export interface IOrder {
  _id: string;
  userName: string;
  products: { productId: string; quantity: number }[];
  address: string;
  totalCost: number;
  created_at: number;
}

interface ordersState {
  items: IOrder[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ordersState = {
  items: null,
  loading: true,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
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
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.items?.push(payload);
    });

    builder.addCase(createOrder.rejected, (state, { payload }: any) => {
      state.error = payload;
    });
  },
});

export const { OrderRequested, OrderRequestReceived, OrderRequestFailed } =
  orderSlice.actions;

export default orderSlice.reducer;
