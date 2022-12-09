import { useState, useEffect } from "react";
// Libs
import { toast } from "react-toastify";
// Utils
import { getFavouriteFromLS } from "../utils/getFavouriteFormLS";
import { setFavouriteToLS } from "../utils/setFavouriteToLS";

function useFavourite(_id: string) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourite = getFavouriteFromLS().find((item) => item === _id);
    if (favourite) setIsFavourite(true);
  }, []);

  const handleAddToFavourites = () => {
    console.log("hehe");
    setFavouriteToLS(_id);
    setIsFavourite((prevState) => !prevState);
    if (!isFavourite) toast.success("Product has been added to favourite :)");
    else toast.warn("Product has been removed from favourite");
  };

  return [isFavourite, handleAddToFavourites] as const;
}

export { useFavourite };
