export const getAllStuff = (state: any) => state.stuff.items;

export const getStuffLoadingStatus = (state: any) => state.stuff.loading;

export const getProductById = (id: string) => (state: any) =>
  state.stuff.items.find((el: any) => el.id === id);
