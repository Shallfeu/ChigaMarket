import React from "react";

import Categories from "./Categories";
import MainSlider from "./MainSlider";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <Categories />
          <MainSlider />
        </div>
      </div>
    </section>
  );
};

export default Home;
