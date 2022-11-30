import React from "react";

type DiscountCardProps = {
  cover: any;
  name: any;
  price: any;
};

const DiscountCard: React.FC<DiscountCardProps> = ({ cover, name, price }) => {
  return (
    <div className="discount-card">
      <img className="discount-card__img" src={cover} alt="discount-img" />
      <h4 className="discount-card__title">{name}</h4>
      <span className="discount-card__price">{price}</span>
    </div>
  );
};

export default DiscountCard;
