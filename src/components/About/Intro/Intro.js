import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";

import * as actionTypes from "../../../actions/constants";
import {WEBSITE_TEXT, FADE_DURATION, PULSATE_KEYFRAMES, AnimatedContent} from '../../../data/constants';

import authorsPhoto from '../../../assets/images/authorsPhoto.jpg'
import SectionHeading from './../../UI/SectionHeading/SectionHeading';
import CentredPhoto from './../../UI/CentredPhoto/CentredPhoto';
import SocialLinks from '../SocialLinks/SocialLinks';
import CentredButton from './../../UI/CentredButton/CentredButton';
import SectionLinks from '../SectionLinks/SectionLinks';
import SectionSeparator from './../../UI/SectionSeparator/SectionSeparator';

/* STYLED COMPONENTS */
const Body = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  
   @media all and (min-width: ${props => props.theme.smallScr}) {
             text-align: justify;
        }  
           
    a {
      font-family: ${props => props.theme.sansSerif};
      
      @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }  
        
    }
`;

const Separator = styled.div`
  margin: 2.8em auto 1.4em auto;
  height: 0.6em;
  width: 8em;
  background-color: ${props => props.theme.darkColor};
`;

/* POSE */
const AnimatedLinks = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        transition: {
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

const AnimatedButton = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        delay: 100,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

export const Intro = (props) => {

    //specifies whether social links and support button should be visible
    const [socialVisible, setSocialVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.onReloadChange(false);
    };

    //shows the social links and support button
    const showSocial = () => {
        setSocialVisible(true);
    };

    //hides the social links and support button
    const hideSocial = () => {
        setSocialVisible(false);
    };

    //show the social links after a while irrespective of waypoints
    const showSocialAnyway = () => {
        //For larger screens, show social links after a while, irrespective of the viewport position
        if (window.innerWidth > 1800) {
            setTimeout(showSocial, 2000);
        } else if (window.innerWidth > 1500) {
            setTimeout(showSocial, 4000);
        } else {
            setTimeout(showSocial, 7000);
        }
    };

    useEffect(() => {
        //show content after a while
        setTimeout(showContent, FADE_DURATION);

        //For larger screens, show social links after a while, irrespective of the viewport position
        showSocialAnyway();

    });

    //hide social links whenever the pathname or language change
    useEffect(() => {
            setTimeout(hideSocial,100);

        },
        [props.location.pathname, props.lang]
    );

    // //hide social links and show them right away whenever the language changes
    // useEffect(() => {
    //         setTimeout(hideSocial,100);
    //         setTimeout(showSocial, 500);
    //     },
    //     [props.lang]
    // );

    return (
        <React.Fragment>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.intro.title}
                    subtitle={WEBSITE_TEXT.intro.subtitle[props.lang]}
                />
                <Separator/>
                <CentredPhoto
                    source={authorsPhoto}
                    altText='Author’s photo'
                />
                <Body>
                    {WEBSITE_TEXT.intro.body[props.lang]}
                </Body>
            </AnimatedContent>
            <AnimatedLinks
                pose={socialVisible ? 'visible' : 'hidden'}>
                <SocialLinks/>
            </AnimatedLinks>
            <AnimatedButton
                pose={socialVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={WEBSITE_TEXT.intro.support[props.lang].message}
                    path={WEBSITE_TEXT.intro.support[props.lang].path}
                />
            </AnimatedButton>
            <Waypoint
                onEnter={showSocial}
            />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={false}
                    nocturine={true}
                    pubs={true}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
            <Waypoint
                onEnter={showSocial}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));