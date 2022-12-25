import styled from "styled-components";
import { POP_KEYFRAMES, PULSATE_KEYFRAMES } from "./shared";

/* Blog.js */

export const BlogTopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

export const BlogTitle = styled.h1`
  font-size: ${(props) => props.theme.smallTitleSize};
  margin: 0 0 1em 0;
  text-align: center;

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    font-size: 8vw;
  }
`;

export const BlogPost = styled.div`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: ${(props) => props.theme.bodySize};
  line-height: 1.5;

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    font-size: ${(props) => props.theme.smallBodySize};
  }

  h1 {
    font-size: 3em;

    @media all and (max-width: ${(props) => props.theme.smallScr}) {
      font-size: 2.5em;
    }

    @media all and (max-width: ${(props) => props.theme.extraSmallScr}) {
      font-size: 1.8em;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 1.5em;
  }

  h5,
  h6 {
    margin-top: 1.2em;
  }

  p + sup,
  a + sup {
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 0;
  }

  img {
    max-width: 100%;
    display: block;
    margin-top: 2em;
    margin-bottom: 1em;
    box-sizing: border-box;
  }

  a {
    text-decoration: underline;
    font-weight: bold;

    @media all and (min-width: ${(props) => props.theme.smallScr}) {
      &:hover {
        animation: ${PULSATE_KEYFRAMES}
          ${(props) => props.theme.pulsateAnimation};
      }
    }
  }
`;

export const BlogCategoryWrapper = styled.div`
  text-align: center;
`;

export const BlogSectionHeading = styled.h2`
  font-size: ${(props) => props.theme.subtitleSize};
  font-weight: bold;
  font-style: italic;
  margin: 2em 0 0 0;
  color: ${(props) => props.theme.darkColor};
  text-align: center;

  @media all and (max-width: ${(props) => props.theme.extraSmallScr}) {
    font-size: 4vw;
  }
`;

export const BlogWrapper = styled.div`
  overflow: hidden;
  padding: 7em 1em 2em 1em;

  .centered {
    text-align: center;
  }

  @media all and (min-width: ${(props) => props.theme.extraSmallScr}) {
    padding: 7em 3em 2em 3em;
  }

  @media all and (min-width: ${(props) => props.theme.smallScr}) {
    padding: 7em 10% 2em 10%;
  }

  @media all and (min-width: ${(props) => props.theme.mediumScr}) {
    padding: 7em 20% 2em 20%;
  }

  @media all and (min-width: ${(props) => props.theme.largeScr}) {
    padding: 7em 25% 2em 25%;
  }

  @media all and (min-width: ${(props) => props.theme.extraLargeScr}) {
    padding: 7em 32% 2em 32%;
  }
`;

export const MainPageBlogBio = styled.div`
  margin-top: 1em;
  padding: 0 3em;
  font-size: ${(props) => props.theme.captionSize};

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    padding: 0;
  }
`;

export const BlogSeparator = styled.div`
  margin: 3em auto;
  height: 0.6em;
  width: 6em;
`;

export const BlogBigSeparator = styled.div`
  margin: 6em auto;
  height: 0.8em;
  width: 15em;
  background-color: ${(props) => props.theme.darkColor};
`;

/* FilteredCategory.js */

export const FilteredCategoryWrapper = styled.div`
  text-align: center;
`;

export const FilteredCategoryHeading = styled.h3`
  font-size: ${(props) => props.theme.subtitleSize};
  margin-top: 1.5em;
  margin-bottom: 0.1em;

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    font-size: 4vw;
  }
`;

export const FilteredCategoryLink = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.captionSize}
  user-select: none;
  margin: 0;
  text-decoration: underline;


  @media all and (min-width: ${(props) => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${(props) =>
  props.theme.pulsateAnimation};
    }
  }

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    font-size: 3vw;
  }
`;

/* CategoryPicker.js */

export const CategoryPickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 1em;
`;

/* CategoryButton.js */
export const CategoryButtonWrapper = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;

  @media all and (min-width: ${(props) => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${(props) => props.theme.pulsateAnimation};
    }
  }
`;

export const CategoryButtonLabel = styled.span`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: ${(props) => props.theme.bodySize};
  font-weight: bold;
  padding: 0 5px;
  text-transform: lowercase;

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    display: none;
  }
`;

/* Teaser.js */

export const TeaserWrapper = styled.div`
  height: 40em;
  overflow: hidden;
  position: relative;
  pointer-events: none;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(247, 247, 247, 0),
      rgba(247, 247, 247, 1) 90%
    );
    width: 100%;
    height: 25em;
  }
`;

/* BlogNoteCredits.js */

export const BlogNoteTeaserTitle = styled.h2`
  font-size: ${(props) => props.theme.blogTitleSize};
  margin: 1em 0 0 0;

  @media all and (max-width: ${(props) => props.theme.extraSmallScr}) {
    font-size: 10vw;
  }
`;

export const BlogNoteTitle = styled.h1`
  font-size: ${(props) => props.theme.blogTitleSize};
  margin: 1em 0 0 0;

  @media all and (max-width: ${(props) => props.theme.extraSmallScr}) {
    font-size: 10vw;
  }
`;

export const BlogNoteCategory = styled.div`
  font-size: ${(props) => props.theme.bodySize};
  margin: 1em 0 0.5em 0;

  @media all and (min-width: ${(props) => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${(props) => props.theme.pulsateAnimation};
    }
  }

  @media all and (max-width: ${(props) => props.theme.extraSmallScr}) {
    font-size: 6vw;
  }
`;

export const BlogNoteCreditWrapper = styled.div`
  font-size: ${(props) => props.theme.captionSize};
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.darkColor};
  padding: 1em 0 0.5em 0;

  div {
    margin-right: 0.8em;
  }
`;

export const BlogTeaserAuthor = styled.div`
  font-weight: bold;
`;

export const BlogNoteAuthor = styled.div`
  font-weight: bold;
  text-decoration: underline;
  color: ${(props) => props.theme.darkColor};

  @media all and (min-width: ${(props) => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${(props) => props.theme.pulsateAnimation};
    }
  }
`;

/* BlogNote.js */

export const BlogNoteReadMore = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.subtitleSize};
  text-align: center;
  text-transform: uppercase;
`;

/* TopImage */
export const TopImageWrapper = styled.div`
  margin-bottom: 0.5em;
  text-align: center;
  padding: 0;
  position: relative;

  &:after {
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    content: "";
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    vertical-align: top;
  }
`;

export const TopImageCredits = styled.div`
  font-size: ${(props) => props.theme.smallCaptionSize}
  margin-top: 0.5em;
  margin-bottom: 1em;
  padding: 0;
  text-align: center;
`;

/* BlogImage.js */

export const BlogImg = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

/* BlogNoteList.js */

export const BlogNoteListWrapper = styled.div`
  text-align: center;
  margin: 3em 0;
`;

/* BlogNoteListElement.js */

export const BlogNoteListElementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlogNoteListElementContent = styled.div`
  text-align: center;
  font-weight: bold;

  user-select: none;
  margin: 1em 0;
`;

export const BlogNoteListElementTitle = styled.div`
  font-size: ${(props) => props.theme.subtitleSize}
  text-transform: uppercase;

  &:hover {
    animation: ${POP_KEYFRAMES} ${(props) => props.theme.popAnimation};
  }
`;

export const BlogNoteListElementSubtitle = styled.div`
  font-size: ${(props) => props.theme.captionSize};

  &:hover {
    animation: ${POP_KEYFRAMES} ${(props) => props.theme.popAnimation};
  }
`;

export const BlogNoteListElementSeparator = styled.div`
  margin: 0.5em auto;
  height: 0.4em;
  width: 10em;
`;

/* BlogBio.js */

export const BlogNoteBio = styled.div`
  font-size: ${(props) => props.theme.smallCaptionSize};
`;

export const BlogBioWrapper = styled.div`
  line-height: 1.4;
  padding: 0 3em;
  text-align: justify;

  @media all and (max-width: ${(props) => props.theme.smallScr}) {
    padding: 0;
  }

  a {
    text-decoration: underline;
    font-weight: bold;

    @media all and (min-width: ${(props) => props.theme.smallScr}) {
      &:hover {
        animation: ${PULSATE_KEYFRAMES}
          ${(props) => props.theme.pulsateAnimation};
      }
    }
  }
`;
