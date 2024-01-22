import React from "react";
import "./FVC.css";
import TopCategoriesPart, { TopCategoriesPage } from "./TopCategoriesPart";
import FruitsVegPage from "./FVHomePage";
import FeaturedBrandsPage from "./FeaturedBrandsPage";
import ColdDrinksPage from "./CDJHomePage";
import SnacksPage from "./SCHomePage";
import Banner from './Banner';


const HomePage = () => {
  return (
    <div>
      <Banner />
      <TopCategoriesPage/>
      <FruitsVegPage />
      <ColdDrinksPage/>
      <SnacksPage/> 
      <FeaturedBrandsPage />
    </div>
  )
};

export default HomePage;
