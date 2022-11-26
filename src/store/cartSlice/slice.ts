import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLocalStorage";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const initialState = getCartFromLS();

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<any>) {
      const findItem = state.items.find(
        (item: any) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<any>) {
      const findItem = state.items.find(
        (item: any) => item.id === action.payload
      );

      if (findItem) {
        if (findItem.quantity > 0) {
          findItem.quantity -= 1;
        }
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<any>) {
      state.items = state.items.filter((obj: any) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearItems, removeItem, minusItem } = sliceCart.actions;

export default sliceCart.reducer;
