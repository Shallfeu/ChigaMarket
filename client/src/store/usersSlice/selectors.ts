import { RootState } from "../store";

export const getUsers = (state: RootState) => state.users.items;

export const getUsersLoading = (state: RootState) => state.users.loading;

export const getUserById = (userId: string) => (state: RootState) => {
  const { items } = state.users;
  if (items) {
    return items.find((el) => el._id === userId);
  }
  return null;
};
