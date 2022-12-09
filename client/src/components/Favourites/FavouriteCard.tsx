import React from "react";
// Libs
import { Link } from "react-router-dom";
// Utils
import { useAppSelector } from "../../store/hooks";
import { getProductById } from "../../store/stuffSlice/selectors";
// Components
import Loader from "../common/Loader";
import ArrivalCard from "../common/ArrivalCard";
import { useFavourite } from "../../hooks/useFavourite";

interface OrderItemProps {
  _id: string;
}

const FavouriteCard: React.FC<OrderItemProps> = ({ _id }) => {
  const [isFavourite, setIsFavourite] = useFavourite(_id);
  const product = useAppSelector(getProductById(_id));

  if (!product) return <Loader />;

  const { image, name, price } = product;

  return (
    <div key={_id} className="orders__item">
      <Link to={`/product/${_id}`}>
        <ArrivalCard image={image} name={name} value={`${price}`} />
      </Link>
      <i
        className={`main__like ${
          isFavourite ? "bi bi-heart-fill" : "bi bi-heart"
        }`}
        onClick={() => setIsFavourite()}
        role="button"
      ></i>
    </div>
  );
};

export default FavouriteCard;
