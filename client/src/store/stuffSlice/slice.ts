import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  items: null,
  loading: true,
  error: null,
};

const stuffSlice: any = createSlice({
  name: "orders",
  initialState,
  reducers: {
    StuffRequested(state) {
      state.loading = true;
    },

    StuffRequestReceived(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.items = payload;
    },

    StuffRequestFailed(state, { payload }: PayloadAction<any>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { StuffRequested, StuffRequestReceived, StuffRequestFailed } =
  stuffSlice.actions;

export default stuffSlice.reducer;
