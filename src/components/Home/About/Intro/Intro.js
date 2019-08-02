import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import authorsPhoto from '../../../../assets/authorsPhoto.jpg'
import {WEBSITE_TEXT} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading';
import CentredPhoto from '../../../UI/CentredPhoto/CentredPhoto';
import SocialLinks from '../SocialLinks/SocialLinks';
import CentredButton from '../../../UI/CentredButton/CentredButton';
import SectionLinks from '../SectionLinks/SectionLinks';

const Body = styled.div`
  text-align: left;
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
`;

const Intro = (props) => {

    return (
        <React.Fragment>
            <SectionHeading
                title={WEBSITE_TEXT.intro.title}
                subtitle={WEBSITE_TEXT.intro.subtitle[props.lang]}
            />
            <CentredPhoto
                source={authorsPhoto}
                altText='Author’s photo'
            />
            <Body>
                {WEBSITE_TEXT.intro.body[props.lang]}
            </Body>
            <SocialLinks/>
            <CentredButton
                message={WEBSITE_TEXT.intro.patreon[props.lang].message}
                path={WEBSITE_TEXT.intro.patreon[props.lang].path}
                link={false}
                capital='w'/>
                <SectionLinks
                    lang={props.lang}
                    top={false}
                    nocturine={false}
                    pubs={true}
                    read={true}
                />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Intro);