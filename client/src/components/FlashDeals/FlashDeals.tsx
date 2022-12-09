import React from "react";
// Components
import FlashSlider from "./FlashSlider";
import Loader from "../common/Loader";
// Utils
import { getStuffByExtraCategory } from "../../store/stuffSlice/selectors";
import { useAppSelector } from "../../store/hooks";

const FlashDeals: React.FC = () => {
  const products = useAppSelector(getStuffByExtraCategory("flash"));

  if (!products) return <Loader />;

  return (
    <section className="flash-deals">
      <div className="container">
        <div className="flash-deals__inner">
          <div className="flash-deals__info">
            <i className="bi bi-lightning-charge-fill flash-deals__icon"></i>
            <h1 className="flash-deals__title">Flash Deals</h1>
          </div>
          <div className="flash-deals__slider">
            <FlashSlider products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
