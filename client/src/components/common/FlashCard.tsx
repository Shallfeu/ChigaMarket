import React from "react";
// Libs
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// Components
import { getCartItemById } from "../../store/cartSlice/selectors";
// Utils
import { addToCart } from "../../store/cartSlice/actions";
import { useFavourite } from "../../hooks/useFavourite";

type FlashCardProps = {
  _id: string;
  discount: number;
  image: string;
  name: string;
  price: number;
};

const FlashCard: React.FC<FlashCardProps> = ({
  _id,
  discount,
  image,
  name,
  price,
}) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(getCartItemById(_id));
  const quantity = cartItem ? cartItem.quantity : 0;
  const [isFavourite, setIsFavourite] = useFavourite(_id);

  const handleAddToCart = () => {
    dispatch(addToCart(_id));
    toast.success("Product has been added to cart :)");
  };

  return (
    <div className="product" key={_id}>
      <div className="product__info">
        <span className="product__discount">{discount}% Off</span>
        <div className="product__like">
          <i
            className={isFavourite ? "bi bi-heart-fill" : "bi bi-heart"}
            onClick={() => setIsFavourite()}
            role="button"
          ></i>

          <span className="product__count">{quantity > 0 ? quantity : 0}</span>
        </div>
      </div>

      <Link to={`/product/${_id}`} className="product__link">
        <img className="product__img" src={image} alt="product__img" />
      </Link>

      <div className="product__datails">
        <h3 className="datails__title">{name}</h3>
        <div className="datails__price">
          <h4 className="price__title">${price}</h4>
          <button
            type="button"
            className="add-btn"
            onClick={() => handleAddToCart()}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
