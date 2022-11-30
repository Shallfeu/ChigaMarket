export const getAllUsers = (state: any) => state.users.items;

export const getUsersLoadingStatus = (state: any) => state.users.loading;

export const getUserById = (id: string) => (state: any) =>
  state.users.items.find((el: any) => el.id === id);
