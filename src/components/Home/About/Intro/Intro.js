import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import authorsPhoto from '../../../../assets/authorsPhoto.jpg'
import {WEBSITE_TEXT} from '../../../../data/constants';
import SectionHeading from '../SectionHeading/SectionHeading';
import CentredPhoto from '../CentredPhoto/CentredPhoto';

const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    
    div {
      padding-right: 8px;
    }

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
            {WEBSITE_TEXT.intro.body[props.lang]}
            <p>
                <SocialLinks>
                    {WEBSITE_TEXT.intro.social.map((link, k) => {
                            //don't display the separator after the last link
                            return (
                                <a key={k} href={link.url} target="_blank"
                                   rel="noopener noreferrer">{link.name}</a>
                            )
                        }
                    )}
                </SocialLinks>
            </p>
            {WEBSITE_TEXT.intro.patreon[props.lang]}
            <p><AnchorLink href='#read'>Read</AnchorLink></p>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Intro);