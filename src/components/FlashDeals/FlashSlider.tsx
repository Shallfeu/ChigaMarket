import React from "react";
import Slider from "react-slick";
import FlashCard from "../common/FlashCard";

type FlashSliderProps = {
  products: {
    id: string;
    discount: number;
    cover: string;
    name: string;
    price: number;
  }[];
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
          key={item.id}
          id={item.id}
          discount={item.discount}
          cover={item.cover}
          name={item.name}
          price={item.price}
        />
      ))}
    </Slider>
  );
};

export default FlashSlider;
