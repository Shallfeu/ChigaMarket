import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Reducers
import stuffReducer from "./stuffSlice/slice";
import cartReducer from "./cartSlice/slice";
import usersSlice from "./usersSlice/slice";
import ordersSlice from "./ordersSlice/slice";
import commentsSlice from "./commentsSlice/slice";

const rootReducer = combineReducers({
  stuff: stuffReducer,
  cart: cartReducer,
  users: usersSlice,
  orders: ordersSlice,
  comments: commentsSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
