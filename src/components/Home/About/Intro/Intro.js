import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import {connect} from 'react-redux';
import authorsPhoto from '../../../../assets/authorsPhoto.jpg'
import {WEBSITE_TEXT, FADE_DURATION} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading';
import CentredPhoto from '../../../UI/CentredPhoto/CentredPhoto';
import SocialLinks from '../SocialLinks/SocialLinks';
import CentredButton from '../../../UI/CentredButton/CentredButton';
import SectionLinks from '../SectionLinks/SectionLinks';
import SectionSeparator from '../../../UI/SectionSeparator/SectionSeparator';

/* STYLED COMPONENTS */
const Body = styled.div`
  text-align: left;
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  
    a {
      font-family: ${props => props.theme.sansSerif};
    }
`;

const Separator = styled.div`
  margin: 2em auto 0.5em auto;
  height: 0.6em;
  width: 8em;
  background-color: ${props => props.theme.darkColor};
`;

/* POSE */

const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

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

const Intro = (props) => {

    //specifies whether social links and Patreon should be visible
    const [socialVisible, setSocialVisible] = useState(false);

    //specifies whether the content should be visible
    const [contentVisible, setContentVisible] = useState(false);

    //shows the content
    const showContent = () => {
        setContentVisible(true);
    };

    //shows the social links and Patreon button
    const showSocial = () => {
        setSocialVisible(true);
    };


    useEffect(() => {

        //show content after a while
        setTimeout(
            () => {
                showContent();
            }, FADE_DURATION
        );

    });

    return (
        <React.Fragment>
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
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
                    message={WEBSITE_TEXT.intro.patreon[props.lang].message}
                    path={WEBSITE_TEXT.intro.patreon[props.lang].path}
                />
            </AnimatedButton>
            <Waypoint
                onEnter={showSocial}
            />
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={false}
                    nocturine={false}
                    pubs={true}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Intro);