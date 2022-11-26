import React from "react";
// Libs

// Components
import Discount from "../components/Discount/Discount";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Footer from "../components/Footer";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Shop from "../components/Shop/Shop";
import TopCategories from "../components/TopCategories/TopCategories";
import Home from "../components/Home";
import Wrapper from "../components/Wrapper";

const MainPage: React.FC = () => {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCategories />
      <NewArrivals />
      <Discount />
      <Shop />
      <Wrapper />
      <Footer />
    </>
  );
};

export default MainPage;
