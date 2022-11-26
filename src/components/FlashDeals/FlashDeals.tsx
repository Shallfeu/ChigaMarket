import React from "react";
import { useAppSelector } from "../../store/hooks";
// Components
import FlashSlider from "./FlashSlider";
import { getAllStuff } from "../../store/stuffSlice/selectors";

const FlashDeals: React.FC = () => {
  const stuff = useAppSelector(getAllStuff);

  return (
    <section className="flash-deals">
      <div className="container">
        <div className="flash-deals__inner">
          <div className="flash-deals__info">
            <i className="bi bi-lightning-charge-fill flash-deals__icon"></i>
            <h1 className="flash-deals__title">Flash Deals</h1>
          </div>
          <div className="flash-deals__slider">
            <FlashSlider products={stuff} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
