import React, { useState } from "react";
// Components
import ShopCategories from "./ShopCategories";
import ShopCart from "./ShopCart";
import ViewAllBtn from "../common/ViewAllBtn";
import Loader from "../common/Loader";
// Utils
import { useAppSelector } from "../../store/hooks";
import { getStuffBySubcategory } from "../../store/stuffSlice/selectors";

import brands from "../../mock/modileBrands.json";

const Shop: React.FC = () => {
  const [selected, setSelected] = useState<string>("");
  const data = useAppSelector(getStuffBySubcategory("mobiles"));

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  if (!data) return <Loader />;

  const filteredData = selected
    ? data.filter((el) => el.brand === selected.toLowerCase())
    : data;

  return (
    <section className="shop">
      <div className="container">
        <div className="shop__inner">
          <ShopCategories
            onSelect={handleSelect}
            items={brands}
            selectedItem={selected}
          />
          <div className="shop__details">
            <div className="shop__header">
              <h1 className="shop__title">Mobile Phones</h1>
              <div className="shop__button">
                <ViewAllBtn direction="electronics/mobiles" />
              </div>
            </div>

            <div className="shop__content">
              <ShopCart items={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
