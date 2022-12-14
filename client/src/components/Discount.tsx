import React from "react";
// Libs
import { Link } from "react-router-dom";
// Components
import ViewAllBtn from "./common/ViewAllBtn";
import Loader from "./common/Loader";
import ArrivalCard from "./common/ArrivalCard";
// Utils
import { useAppSelector } from "../store/hooks";
import { getStuffByExtraCategory } from "../store/stuffSlice/selectors";

const Discount: React.FC = () => {
  const products = useAppSelector(getStuffByExtraCategory("discount"));

  if (!products) return <Loader />;

  return (
    <section className="discount">
      <div className="container">
        <div className="discount__inner">
          <div className="discount__header">
            <div className="discount__info">
              <i className="bi bi-gift discount__icon"></i>
              <h1 className="discount__title">Big Discount</h1>
            </div>
            <ViewAllBtn direction="?main=discount" />
          </div>
          <div className="discount__cells">
            {products.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <ArrivalCard
                  image={product.image}
                  name={product.name}
                  value={`${product.price}`}
                  isMoney
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
