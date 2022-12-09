import React from "react";
//
import topCat from "../../mock/topCat.json";
// Components
import TopCardSlider from "./TopCardSlider";
import ViewAllBtn from "../common/ViewAllBtn";
import Loader from "../common/Loader";

const TopCategories: React.FC = () => {
  if (!topCat) return <Loader />;

  return (
    <section className="top-categories">
      <div className="container">
        <div className="top-categories__inner">
          <div className="top-categories__header">
            <div className="top-categories__info">
              <i className="bi bi-border-all top-categories__icon"></i>
              <h1 className="top-categories__title">Top Categories</h1>
            </div>
            <ViewAllBtn direction="top-categories" />
          </div>

          <div className="top-categories__slider">
            <TopCardSlider data={topCat} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
