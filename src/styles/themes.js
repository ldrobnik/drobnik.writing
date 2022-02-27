import styled from 'styled-components';

// Wrappers for different categories of blog posts

export const BlackAndWhiteTheme = styled.div`
  .coloured {
    color: ${props => props.theme.darkColor}
  }

  .colouredBackground {
    background-color: ${props => props.theme.darkColor};
  }

  .border {
    border: ${props => props.theme.darkColor} 1px solid;
  }

`;


export const NocturineTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.nocturineColor}
  }

  .colouredBackground {
    background-color: ${props => props.theme.nocturineColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.nocturineColor};
  }

  .tintedImage:after {
    background-color: rgba(218, 175, 181, 0.2);
  }

  .border {
    border: ${props => props.theme.nocturineColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.nocturineColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

export const VostokTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.vostokColor}
  }

  .colouredBackground {
    background-color: ${props => props.theme.vostokColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.vostokColor};
  }

  .tintedImage:after {
    background-color: rgba(231, 184, 76, 0.2);
  }

  .border {
    border: ${props => props.theme.vostokColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.vostokColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

`;

export const WritingTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.writingColor}
  }

  .colouredBackground {
    background-color: ${props => props.theme.writingColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.writingColor};
  }

  .tintedImage:after {
    background-color: rgba(255, 233, 28, 0.2);
  }

  .border {
    border: ${props => props.theme.writingColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.writingColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

`;

export const CodeTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.codeColor}
  }

  .colouredBackground {
    background-color: ${props => props.theme.codeColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.codeColor};
  }

  .tintedImage:after {
    background-color: rgba(77, 179, 255, 0.2);
  }

  .border {
    border: ${props => props.theme.codeColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.codeColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

`;

export const BiologyTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.biologyColor}

  }

  .colouredBackground {
    background-color: ${props => props.theme.biologyColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.biologyColor};
  }

  .tintedImage:after {
    background-color: rgba(0, 197, 144, 0.2);
  }

  .border {
    border: ${props => props.theme.biologyColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.biologyColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

`;

export const PopTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.popColor}

  }

  .colouredBackground {
    background-color: ${props => props.theme.popColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.popColor};
  }

  .tintedImage:after {
    background-color: rgba(255, 116, 24, 0.2);
  }

  .border {
    border: ${props => props.theme.popColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.popColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

`;

export const LiteraryTheme = styled.div`
  h1, h2, h3, h4, h5, h6, a, b, strong, .coloured {
    color: ${props => props.theme.literaryColor}

  }

  .colouredBackground {
    background-color: ${props => props.theme.literaryColor};
  }

  & ::selection {
    color: white;
    background-color: ${props => props.theme.literaryColor};
  }

  .tintedImage:after {
    background-color: rgba(244, 123, 161, 0.2);
  }

  .border {
    border: ${props => props.theme.literaryColor} 1px solid;
  }

  blockquote {
    border-left: 6px solid ${props => props.theme.literaryColor};
    padding-left: 1.5vw;
    font-size: 0.9em;

    @media all and (max-width: ${props => props.theme.smallScr}) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;