import { RootState } from "../store";

export const getLogged = (state: RootState) => state.auth.isLoggedIn;

export const getCurrentUserId = (state: RootState) => state.auth.userId;
