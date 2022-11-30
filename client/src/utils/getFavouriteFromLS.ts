export const getFavouriteFromLS = (id: string) => {
  const data = localStorage.getItem("favourite");
  const items = data ? JSON.parse(data) : [];
  const favourite = items.find((item: string) => item === id);
  return favourite;
};
