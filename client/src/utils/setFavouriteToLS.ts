export const setFavouriteToLS = (_id: string) => {
  const data = localStorage.getItem("favourite");
  const items = data ? JSON.parse(data) : [];

  const favourite = items.find((item: string) => item === _id);

  if (favourite) {
    const newStorage = items.filter((item: string) => item !== _id);
    localStorage.setItem("favourite", JSON.stringify(newStorage));
    return false;
  }

  items.push(_id);
  localStorage.setItem("favourite", JSON.stringify(items));
  return true;
};
