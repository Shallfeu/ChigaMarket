import React, { useEffect, useState } from "react";
// api
import API from "../../api";

const ShopCategories: React.FC = () => {
  const [shopCat, setShopCat] = useState<any>();

  useEffect(() => {
    API.shopCategories.fetchAll().then((data) => setShopCat(data));
  }, []);

  if (!shopCat) return <>Loading...</>;

  return (
    <div className="shop-cat">
      <h1 className="shop-cat__title">Brands</h1>
      <ul className="shop-cat__items">
        {shopCat.map((el: any) => {
          return (
            <li className="shop-cat__category">
              <img className="category__img" src={el.cateImg} alt="category" />
              <span className="category__title">{el.cateName}</span>
            </li>
          );
        })}
      </ul>
      <button type="button" className="shop-cat__button">
        All Brands
      </button>
    </div>
  );
};

export default ShopCategories;
