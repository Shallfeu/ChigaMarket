import React from "react";

interface ShopCategoriesProps {
  items: {
    image: string;
    name: string;
  }[];
  selectedItem: string;
  onSelect: (item: string) => void;
}

const ShopCategories: React.FC<ShopCategoriesProps> = ({
  items,
  selectedItem,
  onSelect,
}) => {
  return (
    <div className="shop-cat">
      <h1 className="shop-cat__title">Brands</h1>
      <ul className="shop-cat__items">
        {items.map((item) => {
          return (
            <li key={item.image}>
              <div
                className={`shop-cat__category ${
                  selectedItem === item.name ? "selected" : ""
                }`}
                role="button"
                onClick={() => onSelect(item.name)}
              >
                <img
                  className="category__img"
                  src={item.image}
                  alt="category"
                />
                <span className="category__title">{item.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="shop-cat__button"
        onClick={() => onSelect("")}
      >
        All Brands
      </button>
    </div>
  );
};

export default ShopCategories;
