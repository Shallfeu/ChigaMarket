import { createAsyncThunk } from "@reduxjs/toolkit";
import ordersService from "../../services/order.service";
import {
  OrderRequested,
  OrderRequestReceived,
  OrderRequestFailed,
} from "./slice";

export const loadOrders = (userId: string) => async (dispatch: any) => {
  try {
    dispatch(OrderRequested());
    const { content } = await ordersService.fetchAll(userId);
    dispatch(OrderRequestReceived(content));
  } catch (error: any) {
    dispatch(OrderRequestFailed(error.message));
  }
};

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (
    payload: {
      userId: string;
      address: string;
      userName: string;
      products: any[];
      totalCost: number;
    },
    thunkAPI
  ) => {
    try {
      payload.products = payload.products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      }));
      const { content } = await ordersService.create({ ...payload });
      return content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
