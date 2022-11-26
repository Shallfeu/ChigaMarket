import React from "react";

type ArrivalCardProps = {
  cover: string;
  name: string;
  value: string;
  isMoney?: boolean;
};

const ArrivalCard: React.FC<ArrivalCardProps> = ({
  cover,
  name,
  value,
  isMoney = false,
}) => {
  return (
    <div className="arrival">
      <div className="arrival__icon">
        <img className="arrival__img" src={cover} alt="arrival-img" />
      </div>
      <h4 className="arrival__title">{name}</h4>
      <span className="arrival__price">
        {value}
        {isMoney ? "$" : ""}
      </span>
    </div>
  );
};

export default ArrivalCard;
