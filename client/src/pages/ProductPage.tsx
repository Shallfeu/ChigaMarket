import React from "react";
// Libs
import { useParams } from "react-router-dom";
// Components
import BackBtn from "../components/common/BackBtn";
import Reviews from "../components/common/Reviews/Reviews";
import Loader from "../components/common/Loader";
import ProductInfo from "../components/ProductInfo";
// Utils
import { getCartItemById } from "../store/cartSlice/selectors";
import { useAppSelector } from "../store/hooks";
import { getProductById } from "../store/stuffSlice/selectors";

const ProductPage: React.FC = () => {
  const { productId } = useParams<string>();
  const product = useAppSelector(
    // @ts-ignore: Unreachable code error
    getProductById(productId)
  );
  const cartProd = useAppSelector(getCartItemById(productId ?? ""));

  if (!product) return <Loader />;

  const { _id, discount, image, name, price } = product;

  return (
    <div className="merchandise">
      <div className="container">
        <div className="merchandise__inner">
          <BackBtn />
          <div className="merchandise__main">
            <ProductInfo
              discount={discount}
              image={image}
              name={name}
              price={price}
              _id={_id}
              quantity={cartProd?.quantity}
            />
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
