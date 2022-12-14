import React from "react";
// Libs
import { Link } from "react-router-dom";
// Components
import ArrivalCard from "./common/ArrivalCard";
import ViewAllBtn from "./common/ViewAllBtn";
import Loader from "./common/Loader";
// Utils
import { useAppSelector } from "../store/hooks";
import { getStuffByExtraCategory } from "../store/stuffSlice/selectors";

const NewArrivals: React.FC = () => {
  const products = useAppSelector(getStuffByExtraCategory("arrivals"));

  if (!products) return <Loader />;

  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__inner">
          <div className="arrivals__header">
            <div className="arrivals__info">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt="icon"
              />
              <h1 className="arrivals__title">New Arrivals</h1>
            </div>

            <ViewAllBtn direction="?main=arrivals" />
          </div>
          <div className="arrivals__cells">
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

export default NewArrivals;
