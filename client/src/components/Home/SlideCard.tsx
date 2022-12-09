import React from "react";
// Libs
import { Link } from "react-router-dom";
// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type sliderCardProps = {
  id: string;
  title: string;
  description: string;
  cover: string;
};

const SliderCard: React.FC<sliderCardProps> = ({
  id,
  title,
  description,
  cover,
}) => {
  return (
    <div className="slide" key={id}>
      <div className="slide__info">
        <h1 className="info__title">{title}</h1>
        <p className="info__text">{description}</p>
        <Link to="all-categories">
          <button type="button" className="slide-btn">
            Visit Collection
          </button>
        </Link>
      </div>
      <img className="slide__img" src={cover} alt="slide-img" />
    </div>
  );
};

export default SliderCard;
