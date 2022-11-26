import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

type TopCardProps = {
  data: any;
};

const TopCard: React.FC<TopCardProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {data.map((el: any) => (
        <NavLink to={`/all-categories/${el.para}`}>
          <div className="top-card" key={el.para + el.desc}>
            <div className="top-card__info">
              <span className="top-card__title">{el.para}</span>
              <span className="top-card__desc">{el.desc}</span>
            </div>
            <img className="top-card__img" src={el.cover} alt="top-category" />
          </div>
        </NavLink>
      ))}
    </Slider>
  );
};

export default TopCard;
