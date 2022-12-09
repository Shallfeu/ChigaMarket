import { calcTotalDiscount } from "../../utils/calcTotalDiscount";

export const getCartItems = (state: any) => state.cart.items;

export const getTotalPrice = (state: any) => state.cart.totalPrice;

export const getTotalDiscount = (state: any) =>
  calcTotalDiscount(state.cart.items);

export const getCartItemById = (id: string) => (state: any) =>
  state.cart.items.find((item: any) => item._id === id);
