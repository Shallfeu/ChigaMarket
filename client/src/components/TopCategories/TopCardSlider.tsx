import React from "react";
// Libs
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

type TopCardProps = {
  data: {
    image: string;
    categories: { general: string; subcategory: string };
    desc: string;
  }[];
};

const TopCardSlider: React.FC<TopCardProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {data.map((el: any) => (
        <NavLink
          key={el.name + el.desc}
          to={`/all-categories/${el.categories.general}/${el.categories.subcategory}`}
        >
          <div className="top-card">
            <div className="top-card__info">
              <span className="top-card__title">
                {el.categories.subcategory}
              </span>
              <span className="top-card__desc">{el.desc}</span>
            </div>
            <img className="top-card__img" src={el.image} alt="top-category" />
          </div>
        </NavLink>
      ))}
    </Slider>
  );
};

export default TopCardSlider;
