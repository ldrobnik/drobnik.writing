import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {POP_KEYFRAMES} from "../../../data/constants";

const Wrapper = styled.div`
  text-align: center;
  margin: 1em 0;
`;

const LinkWrapper = styled.div`
  background-color: ${props => props.theme.background};
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
       margin: 0 1em;
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

const Title = styled.div`
  font-size: ${props => props.theme.subtitleSize};
`;

const Subtitle = styled.div`
  font-size: ${props => props.theme.bodySize};
`;

const Capital = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 24em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur( ${props => props.theme.heavyBlur});
`;


const QuickLink = (props) => {

    //constant holding the button content
    const linkTitle = props.title;
    const linkSubtitle = props.subtitle;

    //variable holding the button content wrapped in a QuickLink or a element
    let workingLink;

    //random decorative letter to be displayed on the button
    const capital = linkTitle[(Math.floor(Math.random() * 3))];

    //the content of the link
    const linkContent = (
        <LinkWrapper>
            <Title>
                {linkTitle}
            </Title>
            <Subtitle>
                {linkSubtitle}
            </Subtitle>
            <Capital>
                {capital}
            </Capital>
        </LinkWrapper>
    );

    if (linkTitle[0] === '/') {
        workingLink = (

            <Link to={props.path}>
                {linkContent}
            </Link>);

    } else {
        workingLink = (

            <a
                href={props.path}
                target="_blank"
                rel="noopener noreferrer">
                {linkContent}
            </a>
        );
    }

    return (
        <Wrapper>
            {workingLink}
        </Wrapper>
    );
};

export default QuickLink;