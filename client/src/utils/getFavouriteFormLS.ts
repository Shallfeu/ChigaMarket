export const getFavouriteFromLS = () => {
  const data = localStorage.getItem("favourite");
  const items = data ? JSON.parse(data) : [];
  return items as string[];
};
