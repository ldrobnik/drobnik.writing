import styled from "styled-components";

// Wrappers for different categories of blog posts

export const BlackAndWhiteTheme = styled.div`
  .coloured {
    color: ${(props) => props.theme.darkColor};
  }

  .colouredBackground {
    background-color: ${(props) => props.theme.darkColor};
  }

  .border {
    border: ${(props) => props.theme.darkColor} 1px solid;
  }
`;

export const LiteraryTheme = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  b,
  strong,
  .coloured {
    color: ${(props) => props.theme.literaryColor};
  }

  .colouredBackground {
    background-color: ${(props) => props.theme.literaryColor};
  }

  & ::selection {
    color: white;
    background-color: ${(props) => props.theme.literaryColor};
  }

  .tintedImage:after {
    background-color: rgba(238, 91, 123, 0.2);
  }

  .border {
    border: ${(props) => props.theme.literaryColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${(props) => props.theme.literaryColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${(props) => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

export const TechyTheme = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  b,
  strong,
  .coloured {
    color: ${(props) => props.theme.techyColor};
  }

  .colouredBackground {
    background-color: ${(props) => props.theme.techyColor};
  }

  & ::selection {
    color: white;
    background-color: ${(props) => props.theme.techyColor};
  }

  .tintedImage:after {
    background-color: rgba(241, 210, 15, 0.2);
  }

  .border {
    border: ${(props) => props.theme.techyColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${(props) => props.theme.techyColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${(props) => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

export const ScienceyTheme = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  b,
  strong,
  .coloured {
    color: ${(props) => props.theme.scienceyColor};
  }

  .colouredBackground {
    background-color: ${(props) => props.theme.scienceyColor};
  }

  & ::selection {
    color: white;
    background-color: ${(props) => props.theme.scienceyColor};
  }

  .tintedImage:after {
    background-color: rgba(255, 116, 24, 0.2);
  }

  .border {
    border: ${(props) => props.theme.scienceyColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${(props) => props.theme.scienceyColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${(props) => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;
