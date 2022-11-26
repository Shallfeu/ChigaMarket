import React from "react";
import Slider from "react-slick";
import DiscountCard from "./DiscountCard";

type DiscountSliderProps = {
  data: any;
};

const DiscountSlider: React.FC<DiscountSliderProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {data.map((el: any) => {
        return (
          <DiscountCard cover={el.cover} name={el.name} price={el.price} />
        );
      })}
    </Slider>
  );
};

export default DiscountSlider;
