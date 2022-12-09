import React from "react";
// Libs
import Slider from "react-slick";
// Components
import FlashCard from "../common/FlashCard";
// Types
import { IProduct } from "../../store/stuffSlice/slice";

type FlashSliderProps = {
  products: IProduct[];
};

const SampleNextArrow: any = (props: any) => {
  const { onClick } = props;
  return (
    <button type="button" className="arrow-slider next" onClick={onClick}>
      <i className="bi bi-arrow-right"></i>
    </button>
  );
};

const SamplePrevArrow: any = (props: any) => {
  const { onClick } = props;
  return (
    <button type="button" className="arrow-slider prev" onClick={onClick}>
      <i className="bi bi-arrow-left"></i>
    </button>
  );
};

const FlashSlider: React.FC<FlashSliderProps> = ({ products }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {products.map((item) => (
        <FlashCard
          key={item._id}
          _id={item._id}
          discount={item.discount}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </Slider>
  );
};

export default FlashSlider;
