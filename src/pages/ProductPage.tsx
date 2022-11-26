import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { getProductById } from "../store/stuffSlice/selectors";

const ProductPage: React.FC = () => {
  const { productId } = useParams<string>();

  const { quantity, discount, cover, name, price } = useAppSelector(
    // @ts-ignore: Unreachable code error
    getProductById(productId)
  );

  return (
    <div className="merchandise">
      <div className="container">
        <div className="merchandise__inner">
          <div className="merchandise__back"></div>
          <div className="merchandise__main">
            <img src={cover} alt="some" className="main__img" />
            <div className="main__info">
              <h2 className="main__title">{name}</h2>
              <p className="main__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, porro? Quia aliquam quasi consectetur, dignissimos, at
                ut ipsam laboriosam incidunt quas velit corporis voluptate
                ducimus, distinctio omnis accusamus in asperiores!
              </p>
              <span className="price-value">
                <h4 className="price__total">
                  {price - (price * discount) / 100}.00$
                </h4>
                <h6 className="price__total-crossed">{price}.00$</h6>
              </span>

              <div className="main__buttons">
                <div className="quantity">
                  <button
                    type="button"
                    disabled={quantity < 2}
                    className="quantity__button left"
                    // onClick={() => decreaseQuantity(id)}
                  >
                    <i className="quantity__i bi bi-dash-lg"></i>
                  </button>
                  <span className="quantity__value">{quantity ?? 0}</span>
                  <button
                    type="button"
                    className="quantity__button right"
                    // onClick={() => addToCart(id)}
                  >
                    <i className="quantity__i bi bi-plus-lg"></i>
                  </button>
                </div>

                <button type="button" className="addToCart">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
