import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {POP_KEYFRAMES} from "../../../data/constants";
import * as actionTypes from "../../../store/actions";

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


const QuickLink = (props) => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.onReloadChange(true);
    };

    //constant holding the button content
    const linkTitle = props.title;
    const linkSubtitle = props.subtitle;
    const linkUrl = props.url;

    //variable holding the button content wrapped in a QuickLink or a element
    let workingLink;

    //the content of the link
    const linkContent = (
        <LinkWrapper>
            <Title>
                {linkTitle}
            </Title>
            <Subtitle>
                {linkSubtitle}
            </Subtitle>
        </LinkWrapper>
    );

    //Display a Link or a element depending on the url type
    if (linkUrl[0] === '/') {
        workingLink = (

            <Link
                to={linkUrl}
                onClick={reloadPage}
            >
                {linkContent}
            </Link>);

    } else {
        workingLink = (

            <a
                href={linkUrl}
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

const mapDispatchToProps = dispatch => {
    return {
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};

export default connect(null, mapDispatchToProps)(QuickLink);