import React from "react";
import { AllCategoriesDiv, CategoryButton } from "./Allcategories.style";

const Allcategories = () => {
  
  return (
    <AllCategoriesDiv>
        <CategoryButton>Honeymoon</CategoryButton>
        <CategoryButton>Food</CategoryButton>
        <CategoryButton>Hotel</CategoryButton>
        <CategoryButton>Places</CategoryButton>
        <CategoryButton>Adventure</CategoryButton>
        <CategoryButton>Workcation</CategoryButton>
        <CategoryButton more>More</CategoryButton>
    </AllCategoriesDiv>
  );
};

export default Allcategories;
