// Libs
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UpdatePassword } from "./actions";

export type IUser = {
  _id: string;
  email: string;
  image: string;
  licence: boolean;
  name: string;
  password: string;
  sex: string;
  adresses: string[];
};

type UserState = {
  items: IUser[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  items: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    UsersRequested(state) {
      state.loading = true;
    },

    UsersReceived(state, { payload }: PayloadAction<IUser[]>) {
      state.loading = false;
      state.items = payload;
    },

    UsersRequestedFailed(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },

    UpdateUsers(state, { payload }: PayloadAction<any>) {
      if (state.items) {
        const updatedIndex = state.items.findIndex(
          (el) => el._id === payload._id
        );
        state.items[updatedIndex] = { ...payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      UpdatePassword.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        if (state.items) {
          const updatedIndex = state.items.findIndex(
            (el) => el._id === payload._id
          );
          state.items[updatedIndex] = { ...payload };
        }
      }
    );
  },
});

export const {
  UsersRequested,
  UsersReceived,
  UsersRequestedFailed,
  UpdateUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
