import { RootState } from "../store";

export const getAllOrders = (state: RootState) => state.orders.items;

export const getOrdersLoadingStatus = (state: RootState) =>
  state.orders.loading;

export const getOrderById = (id: string) => (state: RootState) =>
  state.orders.items?.find((el: any) => el._id === id);
