import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import styled from 'styled-components';

import {setTheme, setNavbarVisibility, setDataNoticeVisible, setPageReload} from "../../actions";
import {LINKS, TEXT_NAMES, FADE_DURATION, AnimatedContent} from "../../data/constants";

import QuickLink from "./QuickLink/QuickLink";

/*STYLED COMPONENTS*/
const Wrapper = styled.div`
   padding: 1em 1em;
   
   @media all and (min-width: ${props => props.theme.extraSmallScr}) {
      padding: 1em 3em;
   }
    
   @media all and (min-width: ${props => props.theme.smallScr}) {
      padding: 1em 5%;
   }
    
   @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding: 1em 10%;
   }
    
   @media all and (min-width: ${props => props.theme.largeScr}) {
      padding: 1em 12%;
   }
    
   @media all and (min-width: ${props => props.theme.extraLargeScr}) {
      padding: 1em 15%;
   }
`;

const QuickLinks = (props) => {

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //updates current theme with a random theme
    const updateTheme = () => {
        //randomly selected theme
        const randomTheme = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

        //update Redux store with a new theme
        props.setTheme(randomTheme);
    };

    //hides the NavBar
    const hideNavbar = () => {
        props.setNavbarVisibility(false);
    };

    //turns of data storage notice
    const hideDataNotice = () => {
        props.setDataNoticeVisible(false)
    };

    useEffect(() => {

        //hide navbar
        hideNavbar();

        //Update page title
        document.title = `Łukasz Drobnik - quick links`;

        //change theme to a random one
        updateTheme();

        //Hide data storage notice
        hideDataNotice();

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    return (
        <AnimatedContent
            pose={!props.reload ? 'visible' : 'hidden'}>
            <Wrapper>
                {LINKS.map((link, k) => {
                    return (
                        <QuickLink
                            title={link.title}
                            subtitle={link.subtitle}
                            url={link.url}
                            key={k}/>
                    )
                })}
            </Wrapper>
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setTheme,
        setNavbarVisibility,
        setDataNoticeVisible,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
