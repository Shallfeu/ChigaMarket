import React, { useEffect, useState } from "react";
// Libs
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// Components
import { getCartItemById } from "../../store/cartSlice/selectors";
import { addItem } from "../../store/cartSlice/slice";
// Utils
import { getFavouriteFromLS } from "../../utils/getFavouriteFromLS";
import { setFavouriteFromLS } from "../../utils/setFavouriteFromLS";

type FlashCardProps = {
  id: string;
  discount: number;
  cover: string;
  name: string;
  price: number;
};

const FlashCard: React.FC<FlashCardProps> = ({
  id,
  discount,
  cover,
  name,
  price,
}) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(getCartItemById(id));
  const quantity = cartItem ? cartItem.quantity : 0;
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourite = getFavouriteFromLS(id);
    setIsFavourite(favourite);
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id,
        discount,
        cover,
        name,
        price,
      })
    );
  };

  const handleAddToFavourites = () => {
    setFavouriteFromLS(id);
    setIsFavourite((prevState) => !prevState);
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <span className="product__discount">{discount}% Off</span>
        <div className="product__like">
          <i
            className={isFavourite ? "bi bi-heart-fill" : "bi bi-heart"}
            onClick={handleAddToFavourites}
            role="button"
          ></i>

          <span className="product__count">{quantity > 0 ? quantity : 0}</span>
        </div>
      </div>

      <Link to={`/${id}`}>
        <img className="product__img" src={cover} alt="product__img" />
      </Link>

      <div className="product__datails">
        <h3 className="datails__title">{name}</h3>
        {/* <div className="datails__rate">
          <i className="bi bi-star rate__star"></i>
          <i className="bi bi-star rate__star"></i>
          <i className="bi bi-star rate__star"></i>
          <i className="bi bi-star rate__star"></i>
          <i className="bi bi-star rate__star"></i>
        </div> */}
        <div className="datails__price">
          <h4 className="price__title">{price}$</h4>
          <button type="button" className="add-btn" onClick={handleAddToCart}>
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
