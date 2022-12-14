import React from "react";
// Libs
import { Link, useLocation, useParams } from "react-router-dom";
// Components
import FlashCard from "../components/common/FlashCard";
import BackBtn from "../components/common/BackBtn";
import Loader from "../components/common/Loader";
// Utils
import { useAppSelector } from "../store/hooks";
import { getAllStuff } from "../store/stuffSlice/selectors";
import { selectSearch } from "../store/searchSlice/selectors";
import { getAllCategories } from "../store/categoriesSlice/selectors";

const AllCategories: React.FC = () => {
  const { category, subcategory } = useParams();
  const location = useLocation();
  const query = location.search.split("=")[1];
  const products = useAppSelector(getAllStuff);
  const searchValue = useAppSelector(selectSearch);
  const categories = useAppSelector(getAllCategories);

  const extraProducts = query
    ? products?.filter((el) => el.extra === query)
    : products;

  const searchedData = searchValue
    ? extraProducts?.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : extraProducts;

  const currentCategory = subcategory ? subcategory : category;

  const filteredCategories = category
    ? categories?.find((el) => el.category === category)?.subcategories
    : categories;

  const filteredData = category
    ? subcategory
      ? searchedData?.filter((el) => el.subcategory === subcategory)
      : searchedData?.filter((el) => el.category === category)
    : searchedData;

  if (!filteredData) return <Loader />;

  return (
    <div className="all-categories">
      <div className="all-categories__inner">
        <div className="cate">
          {filteredCategories &&
            filteredCategories.map((el) => (
              <Link to={`${el.category.toLowerCase()}`} key={el._id}>
                <div
                  className={`cate__box ${
                    currentCategory === el.category.toLowerCase()
                      ? "cate-active"
                      : ""
                  }`}
                >
                  <span className="cate__box-title">
                    {el.category.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          <BackBtn />
        </div>
        <div className="all-categories__field">
          {query ? (
            <h1 className="all-categories__area-label">
              {query.toUpperCase()}
            </h1>
          ) : (
            currentCategory && (
              <h1 className="all-categories__area-label">
                {currentCategory.toUpperCase()}
              </h1>
            )
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
              <>
                {searchValue ? (
                  <h4 className="all-categories__run">
                    Sorry, we did not find anything by your request :(
                  </h4>
                ) : (
                  <h4 className="all-categories__run">
                    Sorry, now we are running out of these items, but we think
                    how to figure it out!
                  </h4>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
