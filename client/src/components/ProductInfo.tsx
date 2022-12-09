import React from "react";
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
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  _id,
  discount,
  image,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const [isFavourite, setIsFavourite] = useFavourite(_id);

  return (
    <div className="main">
      <img src={image} alt="some" className="main__img" />
      <div className="main__info">
        <h2 className="main__title">{name}</h2>
        <p className="main__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          porro? Quia aliquam quasi consectetur, dignissimos, at ut ipsam
          laboriosam incidunt quas velit corporis voluptate ducimus, distinctio
          omnis accusamus in asperiores!
        </p>
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
              onClick={() => dispatch(addToCart(_id))}
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
