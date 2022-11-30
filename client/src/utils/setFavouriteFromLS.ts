export const setFavouriteFromLS = (id: string) => {
  const data = localStorage.getItem("favourite");
  const items = data ? JSON.parse(data) : [];
  const favourite = items.find((item: string) => item === id);

  if (favourite) {
    const newStorage = items.filter((el: string) => el !== id);
    localStorage.setItem("favourite", JSON.stringify(newStorage));
    return false;
  }

  items.push(id);
  localStorage.setItem("favourite", JSON.stringify(items));
  return true;
};
