import React from "react";

type ArrivalCardProps = {
  image: string;
  name: string;
  value: string;
  isMoney?: boolean;
};

const ArrivalCard: React.FC<ArrivalCardProps> = ({
  image,
  name,
  value,
  isMoney = false,
}) => {
  return (
    <div className="arrival">
      <div className="arrival__icon">
        <img className="arrival__img" src={image} alt="arrival-img" />
      </div>
      <h4 className="arrival__title">{name}</h4>
      <span className="arrival__price">
        {isMoney ? "$" : ""}
        {value}
      </span>
    </div>
  );
};

export default ArrivalCard;
