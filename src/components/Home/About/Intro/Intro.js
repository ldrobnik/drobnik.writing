import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import {connect} from 'react-redux';
import authorsPhoto from '../../../../assets/authorsPhoto.jpg'
import {WEBSITE_TEXT} from '../../../../data/constants';
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

/* POSE */
const AnimatedLinks = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        transition: {
            type: 'spring',
            stiffness: 100 }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

const Intro = (props) => {

    //specifies whether social links and Patreon button are visible
    const [socialVisible, setSocialVisible] = useState(false);

    //shows the social links and Patreon button
    const showSocial = () => {
        setSocialVisible(true);
    };
    return (
        <React.Fragment>
            <SectionHeading
                title={WEBSITE_TEXT.intro.title}
                subtitle={WEBSITE_TEXT.intro.subtitle[props.lang]}
            />
            <CentredPhoto
                source={authorsPhoto}
                altText='Author’s photo'
                capital='Ł'
            />
            <Body>
                {WEBSITE_TEXT.intro.body[props.lang]}
            </Body>
            <Waypoint
                onEnter={showSocial}
            />
            <AnimatedLinks
                pose={socialVisible ? 'visible' : 'hidden'}>
                <SocialLinks/>
                <CentredButton
                    message={WEBSITE_TEXT.intro.patreon[props.lang].message}
                    path={WEBSITE_TEXT.intro.patreon[props.lang].path}
                    capital='w'/>
            </AnimatedLinks>
            <SectionLinks
                lang={props.lang}
                top={false}
                nocturine={false}
                pubs={true}
                read={true}
            />
            <SectionSeparator/>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Intro);