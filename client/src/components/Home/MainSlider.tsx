import React, { useEffect, useState } from "react";
// Libs
import Slider from "react-slick";
// Components
import Loader from "../common/Loader";
import SliderCard from "./SlideCard";
//
import API from "../../api";

type Slide = {
  id: string;
  title: string;
  desc: string;
  cover: string;
};

const MainSlider: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    API.slides.fetchAll().then((data) => setSlides(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!slides) return <Loader />;

  return (
    <section className="home-slider">
      <Slider {...settings}>
        {slides.map((el) => (
          <SliderCard
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.desc}
            cover={el.cover}
          />
        ))}
      </Slider>
    </section>
  );
};

export default MainSlider;
