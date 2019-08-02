import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import authorsPhoto from '../../../../assets/authorsPhoto.jpg'
import {WEBSITE_TEXT} from '../../../../data/constants';
import SectionHeading from '../SectionHeading/SectionHeading';

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
    font-size: ${props => props.theme.titleSize};
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 15vw;
    }
`;

const Subtitle = styled.div`
    font-size: ${props => props.theme.subtitleSize};
    font-weight: bold;
    font-style: italic;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 8vw;
    }
    
`;

const AuthorsPhoto = styled.div`
  height: 12em;
  opacity: ${props => props.theme.translucent};
    img {
      height: 100%;
    }
`;

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
            <Header>

                <AuthorsPhoto>
                    <img src={authorsPhoto} alt='Author’s photo' />
                </AuthorsPhoto>
            </Header>
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