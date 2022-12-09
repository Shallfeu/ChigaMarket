import React from "react";
// Libs
import { Link, useParams } from "react-router-dom";
// Components
import FlashCard from "../components/common/FlashCard";
import BackBtn from "../components/common/BackBtn";
import Loader from "../components/common/Loader";
// Utils
import categories from "../mock/categories.json";
import { useAppSelector } from "../store/hooks";
import { getAllStuff } from "../store/stuffSlice/selectors";

const AllCategories: React.FC = () => {
  const { general, subcategory } = useParams();
  const data = useAppSelector(getAllStuff);

  const filteredCategories = general
    ? categories?.find((el) => el.general.toLowerCase() === general)
        ?.subcategories
    : categories;

  const filteredData = general
    ? subcategory
      ? data?.filter(
          (el) => el.category.subcategory.toLowerCase() === subcategory
        )
      : data?.filter((el) => el.category.general.toLowerCase() === general)
    : data;

  const currentCategory = subcategory ?? general;

  if (!filteredData) return <Loader />;

  return (
    <div className="all-categories">
      <div className="container">
        <div className="all-categories__inner">
          <div className="cate">
            {filteredCategories &&
              filteredCategories.map((el) => (
                <Link to={`${el.general.toLowerCase()}`} key={el.id}>
                  <div
                    className={`cate__box ${
                      currentCategory === el.general.toLowerCase()
                        ? "cate-active"
                        : ""
                    }`}
                  >
                    <span className="cate__box-title">{el.general}</span>
                  </div>
                </Link>
              ))}
            <BackBtn />
          </div>
          <div className="all-categories__field">
            {currentCategory && (
              <h1 className="all-categories__area-label">
                {currentCategory.toUpperCase()}
              </h1>
            )}
            <div className="all-categories__area">
              {filteredData?.length > 0 ? (
                filteredData?.map((el) => (
                  <FlashCard
                    key={el._id}
                    _id={el._id}
                    discount={el.discount}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                  />
                ))
              ) : (
                <h4 className="all-categories__run">
                  Sorry, now we are running out of these items, but we think how
                  to figure it out!
                </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
