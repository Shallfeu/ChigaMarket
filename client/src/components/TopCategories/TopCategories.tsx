import React, { useEffect, useState } from "react";
//
import API from "../../api";
// Components
import TopCardSlider from "./TopCardSlider";

const TopCategories: React.FC = () => {
  const [topCategories, setTopCategories] = useState();

  useEffect(() => {
    API.topCat.fetchAll().then((data) => setTopCategories(data));
  }, []);

  if (!topCategories) return <>Loading...</>;

  return (
    <section className="top-categories">
      <div className="container">
        <div className="top-categories__inner">
          <div className="top-categories__header">
            <div className="top-categories__info">
              <i className="bi bi-border-all top-categories__icon"></i>
              <h1 className="top-categories__title">Top Categories</h1>
            </div>
            <button
              className="top-categories__button viewall-btn"
              type="button"
            >
              View all<i className="bi bi-caret-right-fill"></i>
            </button>
          </div>

          <div className="top-categories__slider">
            <TopCardSlider data={topCategories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
