import React from "react";
// Components
import Loader from "../../common/Loader";
import FavouriteCard from "./FavouriteCard";
// Utils
import { getFavouriteFromLS } from "../../../utils/getFavouriteFormLS";

const Favourite: React.FC = () => {
  const favourites = getFavouriteFromLS();

  if (!favourites) return <Loader />;

  return (
    <>
      <h3 className="favourite__title">Favourite</h3>
      <div className="favourite__list">
        {favourites.length < 1 ? (
          <div className="favourite__empty">
            You didn&apos;t add any product in favourite :)
          </div>
        ) : (
          favourites.map((favourite) => (
            <FavouriteCard _id={favourite} key={favourite} />
          ))
        )}
      </div>
    </>
  );
};

export default Favourite;
