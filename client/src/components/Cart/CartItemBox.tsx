import React, { useState } from "react";
// Libs
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
// Components
import { addItem, minusItem, removeItem } from "../../store/cartSlice/slice";

type Product = {
  id: string;
  discount: number;
  cover: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItemBox: React.FC<Product> = ({
  id,
  discount,
  cover,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const [inFavourites, setInFavourites] = useState(false);
  const totalPrice = price * quantity;
  const totalPriceWithDiscount = (price - (price * discount) / 100) * quantity;

  return (
    <div className="details__item" key={id}>
      <Link to={`/${id}`}>
        <img src={cover} alt="product" className="item__img" />
      </Link>

      <div className="item__information">
        <div className="item__detail">
          <h1 className="detail__title">{name}</h1>

          <div className="detail__description">
            <span className="description__field">Company</span>
            <span className="description__field">Weight</span>
          </div>

          <div className="detail__setting">
            <button
              type="button"
              className="detail__button"
              onClick={() => setInFavourites(!inFavourites)}
            >
              <i
                className={`detail__img ${
                  inFavourites ? "bi bi-heart-fill" : "bi bi-heart"
                }`}
                role="button"
              ></i>
              <span className="detail__span">Like</span>
            </button>
            <button
              type="button"
              className="detail__button"
              onClick={() => dispatch(removeItem(id))}
            >
              <i className="bi bi-x-lg detail__img"></i>
              <span className="detail__span">Remove</span>
            </button>
          </div>
        </div>

        <div className="item__price">
          <span className="price-value">
            <h4 className="price__total">{totalPriceWithDiscount}.00$</h4>
            <h6 className="price__total-crossed">{totalPrice}.00$</h6>
          </span>

          <div className="quantity">
            <button
              type="button"
              disabled={quantity < 2}
              className="quantity__button left"
              onClick={() => dispatch(minusItem(id))}
            >
              <i className="quantity__i bi bi-dash-lg"></i>
            </button>
            <span className="quantity__value">{quantity}</span>
            <button
              type="button"
              className="quantity__button right"
              onClick={() =>
                dispatch(
                  addItem({
                    id,
                    discount,
                    cover,
                    name,
                    price,
                    quantity,
                  })
                )
              }
            >
              <i className="quantity__i bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemBox;
