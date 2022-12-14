import React from "react";
// Libs
import { toast } from "react-toastify";
// Components
import QuantityBtns from "./common/QuantityBtns";
// Utils
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice/actions";
import { useFavourite } from "../hooks/useFavourite";

interface ProductInfoProps {
  _id: string;
  discount: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  desctiption: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  _id,
  discount,
  image,
  name,
  price,
  quantity,
  desctiption,
}) => {
  const dispatch = useAppDispatch();
  const [isFavourite, setIsFavourite] = useFavourite(_id);

  const handleAddToCart = () => {
    dispatch(addToCart(_id));
    toast.success("Product has been added to cart :)");
  };

  return (
    <div className="main">
      <img src={image} alt="some" className="main__img" />
      <div className="main__info">
        <h2 className="main__title">{name}</h2>
        <p className="main__desc">{desctiption}</p>
        <span className="price-value">
          <h4 className="price__total">
            {price - (price * discount) / 100}.00$
          </h4>
          <h6 className="price__total-crossed">{price}.00$</h6>
        </span>
        <i
          className={`main__like ${
            isFavourite ? "bi bi-heart-fill" : "bi bi-heart"
          }`}
          onClick={() => setIsFavourite()}
          role="button"
        ></i>
        <div className="main__buttons">
          {quantity > 0 ? (
            <QuantityBtns _id={_id} quantity={quantity} />
          ) : (
            <button
              type="button"
              className="addToCart"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
