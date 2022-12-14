// Libs
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// Utils
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLocalStorage";

export interface CartItem {
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
  quantity: number;
}

interface CartAtr {
  items: CartItem[];
  totalPrice: number;
  error: string;
}

const initialState: CartAtr = { ...getCartFromLS(), error: "" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    RequestAddToCartSuccess(state, { payload }: PayloadAction<CartItem>) {
      const findItem = state.items.find((el) => payload._id === el._id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    RequestFailed(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      toast.error("Some problem occured, tru it later :(");
    },

    RequestDecreaseSuccess(state, { payload }: PayloadAction<CartItem>) {
      const findItem = state.items.find((item) => item._id === payload._id);
      if (findItem) {
        if (findItem.quantity > 1) {
          findItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item._id !== payload._id);
        }
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    RequestRemoveItemSuccess(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((item) => item._id !== payload);
      state.totalPrice = calcTotalPrice(state.items);
      toast.success("Product has been removed :)");
    },

    RequestClearSuccess(state) {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const {
  RequestDecreaseSuccess,
  RequestAddToCartSuccess,
  RequestFailed,
  RequestRemoveItemSuccess,
  RequestClearSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
