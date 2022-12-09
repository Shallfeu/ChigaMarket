import { RootState } from "../store";

export const getAllStuff = (state: RootState) => state.stuff.items;

export const getStuffByCategory = (general: string) => (state: RootState) =>
  state.stuff.items?.filter((el) => el.category.general === general);

export const getStuffBySubcategory =
  (subcategory: string) => (state: RootState) =>
    state.stuff.items?.filter((el) => el.category.subcategory === subcategory);

export const getStuffByExtraCategory = (extra: string) => (state: RootState) =>
  state.stuff.items?.filter((el) => el.category.extra === extra);

export const getStuffLoadingStatus = (state: RootState) => state.stuff.loading;

export const getProductById = (id: string) => (state: RootState) =>
  state.stuff.items?.find((el) => el._id === id);
