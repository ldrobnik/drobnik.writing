import React, { useEffect, useState } from "react";
import { AnimatedContent } from "../../../animations/shared";
import { CategoryPickerWrapper } from "../../../styles/blog";
import { BLOG_NOTES, BLOG_CATEGORIES } from "../../../data/constants";
import { CategoryButton } from "./CategoryButton/CategoryButton";

export const CategoryPicker = (props) => {
  //array of category buttons to be displayed
  const [categoryButtons, setCategoryButtons] = useState([]);

  //checks which categories are active, and returns an array of category buttons
  const checkActiveCategories = () => {
    //array holding all category buttons
    let categoryBtns = [];

    //loop through categories and see if there are any notes in a given category
    for (const category of Object.keys(BLOG_CATEGORIES)) {
      //loop through all blog notes, if there's a match, add a given category button to the array
      for (const note of BLOG_NOTES) {
        if (note.category === category) {
          categoryBtns.push(<CategoryButton category={category} />);
          break;
        }
      }
    }

    return categoryBtns;
  };

  useEffect(() => {
    setCategoryButtons(() => checkActiveCategories());
  }, []);

  //do not show the content until the page is loaded
  return (
    <AnimatedContent pose={!props.reload ? "visible" : "hidden"}>
      <CategoryPickerWrapper>
        {categoryButtons.length > 0 &&
          categoryButtons.map((button, k) => {
            return <React.Fragment key={k}>{button}</React.Fragment>;
          })}
      </CategoryPickerWrapper>
    </AnimatedContent>
  );
};

export default CategoryPicker;
