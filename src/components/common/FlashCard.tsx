import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../../store/cartSlice/slice";
import { useAppDispatch } from "../../store/hooks";

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
  const [inFavourites, setInFavourites] = useState(false);

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

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <span className="product__discount">{discount}% Off</span>
        <div className="product__like">
          <i
            className={inFavourites ? "bi bi-heart-fill" : "bi bi-heart"}
            onClick={() => setInFavourites(!inFavourites)}
            role="button"
          ></i>

          <span className="product__count">{0}</span>
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
