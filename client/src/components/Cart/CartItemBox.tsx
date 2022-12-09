import React from "react";
// Libs
import { Link } from "react-router-dom";
// Components
import QuantityBtns from "../common/QuantityBtns";
// Utils
import { useAppDispatch } from "../../store/hooks";
import { RemoveItem } from "../../store/cartSlice/actions";
import { useFavourite } from "../../hooks/useFavourite";
// Types
import { CartItem } from "../../store/cartSlice/slice";

const CartItemBox: React.FC<CartItem> = ({
  _id,
  discount,
  image,
  name,
  price,
  brand,
  quantity,
  category,
}) => {
  const dispatch = useAppDispatch();
  const totalPrice = price * quantity;
  const totalPriceWithDiscount = (price - (price * discount) / 100) * quantity;
  const [isFavourite, setIsFavourite] = useFavourite(_id);

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to remove")) {
      dispatch(RemoveItem(_id));
    }
  };

  return (
    <div className="details__item" key={_id}>
      <Link to={`/product/${_id}`}>
        <img src={image} alt="product" className="item__img" />
      </Link>

      <div className="item__information">
        <div className="item__detail">
          <h1 className="detail__title">{name}</h1>

          <div className="detail__description">
            <span className="description__field">Company: {brand}</span>
            <span className="description__field">
              Category: {category.general}
            </span>
          </div>

          <div className="detail__setting">
            <button
              type="button"
              className="detail__button"
              onClick={() => setIsFavourite()}
            >
              <i
                className={`detail__img ${
                  isFavourite ? "bi bi-heart-fill" : "bi bi-heart"
                }`}
                role="button"
              ></i>
              <span className="detail__span">Like</span>
            </button>
            <button
              type="button"
              className="detail__button"
              onClick={() => onClickRemove()}
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

          <QuantityBtns _id={_id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartItemBox;
