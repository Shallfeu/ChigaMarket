import React from "react";

// Components
import ShopCategories from "./ShopCategories";
import ShopCart from "./ShopCart";

const Shop: React.FC = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="shop__inner">
          <ShopCategories />
          <div className="shop__details">
            <div className="shop__header">
              <h1 className="shop__title">Mobile Phones</h1>
              <div className="shop__button">
                <button type="button" className="viewall-btn">
                  View all<i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>

            <div className="shop__content">
              <ShopCart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
