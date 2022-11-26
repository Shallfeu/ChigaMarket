import React, { useEffect, useState } from "react";
// api
import API from "../../api";
// Components
import ArrivalCard from "../common/ArrivalCard";

const NewArrivals: React.FC = () => {
  const [arrivals, setArrivals] = useState<any>();

  useEffect(() => {
    API.arrivals.fetchAll().then((data) => setArrivals(data));
  }, []);

  if (!arrivals) return <>Loading...</>;

  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__inner">
          <div className="arrivals__header">
            <div className="arrivals__info">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt="icon"
              />
              <h1 className="arrivals__title">New Arrivals</h1>
            </div>
            <button className="viewall-btn" type="button">
              View all<i className="bi bi-caret-right-fill"></i>
            </button>
          </div>
          <div className="arrivals__cells">
            {arrivals.map((el: any) => (
              <ArrivalCard
                cover={el.cover}
                name={el.name}
                value={el.price}
                isMoney
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
