import React from "react";

import TopCategoriesPart, { TopCategoriesPage } from "./TopCategoriesPart";
import FruitsVegPage from "./FVHomePage";
import FeaturedBrandsPage from "./FeaturedBrandsPage";

const HomePage = () => {
  return (
    <div>
      <TopCategoriesPage/>
      <FruitsVegPage />
      <FeaturedBrandsPage />
      
      
    </div>
  );
};

export default HomePage;