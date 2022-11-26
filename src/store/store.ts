import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Reducers
import stuffReducer from "./stuffSlice/slice";
import cartReducer from "./cartSlice/slice";

const rootReducer = combineReducers({
  stuff: stuffReducer,
  cart: cartReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
