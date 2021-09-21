import styled, {createGlobalStyle, keyframes} from 'styled-components';

/* Keyframes */

export const PULSATE_KEYFRAMES = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;


//Keyframes for 'popping' animation
export const POP_KEYFRAMES = keyframes`
  0% {
    transform: scale(1, 1);
  }

  30% {
    transform: scale(1.05, 1.05);

  }

  100% {
    transform: scale(1, 1);
  }
`;

//Duration of the fade-in animation used when loading new page
export const FADE_DURATION = 200;

/* General */

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.sansSerif};
    color: ${props => props.theme.darkColor};
    background: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.darkColor};

  }

  ::selection {
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.darkColor};
  }
`;

export const SectionSeparator = styled.div`
  margin: 6em auto 3em auto;
  height: 0.8em;
  width: 15em;
  background-color: ${props => props.theme.darkColor};
`;


export const SmallSeparator = styled.div`
  margin: 2.8em auto 1.4em auto;
  height: 0.6em;
  width: 8em;
  background-color: ${props => props.theme.darkColor};
`;


export const InvisibleSeparator = styled.div`
  height: 3em;
`;


/* NavBar.js */

export const NavBarWrapper = styled.div`
  .hidden {
    display: none;
  }
`;

export const NavToolbar = styled.header`
  height: 3em;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.theme.background};
  z-index: 50;
  font-weight: bold;
  user-select: none;
  backdrop-filter: blur(8px);
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: -4px;
  left: -2px;

  @media all and (min-width: ${props => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
    }
  }
`;

export const NavElement = styled.div`
  cursor: pointer;
  margin: ${props => props.theme.navIconMargin};

  @media all and (min-width: ${props => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
    }
  }
`;

export const NavInactiveElement = styled.div`
  cursor: not-allowed;
  margin: ${props => props.theme.navIconMargin};
  opacity: ${props => props.theme.translucent};
`;

export const ToggledNavElement = styled.div`
  cursor: pointer;
  margin: ${props => props.theme.navIconMargin};
  opacity: ${props => props.theme.translucent};

  @media all and (min-width: ${props => props.theme.smallScr}) {
    &:hover {
      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
    }
  }
`;

export const NavLinkContent = styled.div`
  padding: ${props => props.theme.navIconPadding};
  display: block;
  min-width: 1.5em;
`;

/* Logo.js */

export const WebsiteLogo = styled.div`
  height: 2.8em;
  padding: 0.3em;

  img {
    height: 100%;
  }
`;

/* NavLinks.js */

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${props => props.theme.captionSize}
  margin: 0 auto;
  transform: translateX(6vw);

  div {
    padding: 0 0.3em;

    @media all and (min-width: ${props => props.theme.smallScr}) {
      &:hover {
        animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
      }
    }
  }
`;

/* CentredButton.js */

export const CentredButtonOuterWrapper = styled.div`
  text-align: center;
  margin: 1em 0;
`;

export const CentredButtonButtonWrapper = styled.div`
  background-color: ${props => props.theme.background};
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
  padding: 0.8em;
  margin: 0 0.5em;
  cursor: pointer;
  display: block;
  position: relative;
  user-select: none;
  overflow: hidden;

  &:hover {
    animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation}
  }

  @media all and (min-width: ${props => props.theme.extraSmallScr}) {
    margin: 0 0.8em;;
  }

  @media all and (min-width: ${props => props.theme.smallScr}) {
    margin: 0 4em;
  }

  @media all and (min-width: ${props => props.theme.mediumScr}) {
    margin: 0 2em;
  }

  @media all and (min-width: ${props => props.theme.largeScr}) {
    margin: 0 20%;
  }

  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
    margin: 0 25%;
  }
`;

/* CentredPhoto.js */

export const CentredPhotoWrapper = styled.div`
  text-align: center;
  padding: 2em;
  position: relative;
`;

export const Photo = styled.div`
  height: 12em;
  opacity: ${props => props.theme.slightlyTranslucent};
  z-index: 60;

  img {
    height: 100%;
  }
`;

export const PhotoLink = styled.div`
  height: 24em;
  opacity: ${props => props.theme.slightlyTranslucent};
  z-index: 60;

  img {
    height: 100%;
  }
`;

/* CopyrightNote.js */

export const CopyNote = styled.div`
  margin: 1em 0;
  font-size: ${props => props.theme.smallCaptionSize};
  text-align: center;
`;

/* DataNotice.js */

export const Notice = styled.div`
  background-color: ${props => props.theme.darkColor};
  padding: 1em 0;
  margin: 0 auto;
  position: fixed;
  bottom: 10px;
  left: 5%;
  width: 90%;
  text-align: center;


  @media all and (min-width: ${props => props.theme.mediumScr}) {
    left: 10%;
    width: 80%;
  }

  @media all and (min-width: ${props => props.theme.largeScr}) {
    left: 15%;
    width: 70%;
  }

  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
    left: 20%;
    width: 60%;
  }
`;

export const NoticeMessage = styled.div`
  color: ${props => props.theme.lightColor};
  font-size: ${props => props.theme.captionSize};
  font-family: ${props => props.theme.serif};
  padding: 0.5em 1em;
`;

export const NoticeDismissButton = styled.div`
  background-color: ${props => props.theme.lightColor};
  text-transform: uppercase;
  font-weight: bold;
  max-width: 8em;
  margin: 0 auto;
  padding: 0.3em;
  cursor: pointer;

  &:hover {
    opacity: ${props => props.theme.slightlyTranslucent};
  }
`;

/* SectionHeading.js */

export const SectionHeader = styled.div`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.titleSize};
  font-weight: bold;
  margin: 0.5em 0;

  @media all and (max-width: ${props => props.theme.smallScr}) {
    font-size: 12vw;
  }
`;

export const SectionSubtitle = styled.div`
  font-size: ${props => props.theme.subtitleSize};
  font-weight: bold;
  font-style: italic;

  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
    font-size: 6vw;
  }
`;

/* PageHeading.js */

export const PageTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
  font-weight: bold;
  margin: 0;

  @media all and (max-width: ${props => props.theme.smallScr}) {
    font-size: 12vw;
  }
`;


/* Spinner.js */

export const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 90;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};

  img {
    height: 110px;
  }
`;


/* SmallSpinner.js */

export const SmallSpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  width: 100%;
  animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
  
  img {
    height: 60px;
  }
`;

export const SpinnerBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 80;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
`;

/* SubpageLinks.js */

export const SubLinks = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${props => props.theme.captionSize}
  user-select: none;
  margin: 1em 0;
  text-decoration: underline;

  div {
    padding: 0 0.3em;

    @media all and (min-width: ${props => props.theme.smallScr}) {
      &:hover {
        animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
      }
    }
  }
`;

/* ToggleSwitch.js */

export const ToggleWrapper = styled.div`
  padding: 0.1em;
  opacity: ${props => props.theme.translucent};
`;

