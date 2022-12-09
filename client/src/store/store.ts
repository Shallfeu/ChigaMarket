import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Reducers
import stuffReducer from "./stuffSlice/slice";
import cartReducer from "./cartSlice/slice";
import usersSlice from "./usersSlice/slice";
import ordersSlice from "./ordersSlice/slice";
import reviewSlice from "./reviewSlice/slice";
import authSlice from "./authSlice/slice";

const rootReducer = combineReducers({
  stuff: stuffReducer,
  cart: cartReducer,
  users: usersSlice,
  orders: ordersSlice,
  reviews: reviewSlice,
  auth: authSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
