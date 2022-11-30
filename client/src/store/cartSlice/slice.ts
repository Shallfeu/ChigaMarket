// Libs
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Utils
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLocalStorage";

const initialState: any = getCartFromLS();

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<any>) {
      const findItem = state.items.find((item: any) => item.id === payload.id);

      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, { payload }: PayloadAction<string>) {
      const findItem = state.items.find((item: any) => item.id === payload);

      if (findItem) {
        if (findItem.quantity > 0) {
          findItem.quantity -= 1;
        }
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((obj: any) => obj.id !== payload);
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
