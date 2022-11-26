import React, { useEffect, useState } from "react";
// api
import API from "../../api";
// Components
import DiscountSlider from "./DiscountSlider";

const Discount: React.FC = () => {
  const [discount, setDiscount] = useState();

  useEffect(() => {
    API.discount.fetchAll().then((data) => setDiscount(data));
  }, []);

  if (!discount) return <>Loading...</>;

  return (
    <section className="discount">
      <div className="container">
        <div className="discount__inner">
          <div className="discount__header">
            <div className="discount__info">
              <i className="bi bi-gift discount__icon"></i>
              <h1 className="discount__title">Big Discount</h1>
            </div>
            <button className="viewall-btn" type="button">
              View all<i className="bi bi-caret-right-fill"></i>
            </button>
          </div>
          <div className="discount__cells">
            <DiscountSlider data={discount} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
