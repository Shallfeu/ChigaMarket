export const getAllOrders = (state: any) => state.orders.items;

export const getOrdersLoadingStatus = (state: any) => state.orders.loading;

export const getOrderById = (id: string) => (state: any) =>
  state.orders.items.find((el: any) => el.id === id);
