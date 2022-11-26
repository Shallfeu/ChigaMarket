import React from "react";
// Components
import { useAppSelector } from "../../store/hooks";
import { getAllStuff } from "../../store/stuffSlice/selectors";
import FlashCard from "../common/FlashCard";

const ShopCart: React.FC = () => {
  const shop = useAppSelector(getAllStuff);

  if (!shop) return <>Loading...</>;

  return (
    <>
      {shop.map((item: any) => (
        <FlashCard
          key={item.id}
          id={item.id}
          discount={item.discount}
          cover={item.cover}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
};

export default ShopCart;
