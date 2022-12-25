import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import {
  CategoryButtonWrapper,
  CategoryButtonLabel,
} from "../../../../styles/blog";
import ThemeWrapper from "../../../ThemeWrapper/ThemeWrapper";
import { setPageReload } from "../../../../actions";
import { BLOG_CATEGORIES } from "../../../../data/constants";

export const CategoryButton = (props) => {
  // the first word of the category name
  const categoryLabel = BLOG_CATEGORIES[props.category].split(" ")[0];

  return (
    <CategoryButtonWrapper>
      <ThemeWrapper theme={props.category} preventBw={true}>
        <Link to={`/blog/${props.category}`}>
          <FontAwesomeIcon
            icon={faStickyNote}
            aria-hidden="true"
            title={BLOG_CATEGORIES[props.category]}
          ></FontAwesomeIcon>
          <span className="sr-only">{props.category}</span>

          <CategoryButtonLabel>{categoryLabel}</CategoryButtonLabel>
        </Link>
      </ThemeWrapper>
    </CategoryButtonWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setPageReload }, dispatch);
};

export default connect(null, mapDispatchToProps)(CategoryButton);
