import React from "react";
// Components
import FlashCard from "../common/FlashCard";
// Types
import { IProduct } from "../../store/stuffSlice/slice";

interface ShopCartProps {
  items: IProduct[];
}

const ShopCart: React.FC<ShopCartProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <FlashCard
          key={item._id}
          _id={item._id}
          discount={item.discount}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
};

export default ShopCart;
