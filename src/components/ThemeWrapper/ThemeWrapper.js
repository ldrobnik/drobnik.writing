import React from "react";
import { connect } from "react-redux";
import {
  BlackAndWhiteTheme,
  LiteraryTheme,
  TechyTheme,
  ScienceyTheme,
} from "../../styles/themes";

const ThemeWrapper = (props) => {
  //Don't style text if the black and white mode is on
  //Add appropriate styling to blog posts of different categories

  if (props.bwMode && !props.preventBw) {
    return <BlackAndWhiteTheme>{props.children}</BlackAndWhiteTheme>;
  } else {
    switch (props.theme) {
      case "literary":
        return <LiteraryTheme>{props.children}</LiteraryTheme>;
      case "techy":
        return <TechyTheme>{props.children}</TechyTheme>;
      case "sciencey":
        return <ScienceyTheme>{props.children}</ScienceyTheme>;
      default:
        return <React.Fragment>{props.children}</React.Fragment>;
    }
  }
};

const mapStateToProps = (state) => {
  return {
    bwMode: state.blackAndWhite,
  };
};
export default connect(mapStateToProps)(ThemeWrapper);
