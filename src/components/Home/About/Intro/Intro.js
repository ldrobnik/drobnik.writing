import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';
import {WEBSITE_TEXT} from '../../../../data/constants';
import {Link} from "react-router-dom";
import authorsPhoto from '../../../../assets/authorsPhoto.jpg'

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
    font-size: 5em;
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 15vw;
    }
`;

const Subtitle = styled.div`
    font-size: 2em;
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

const Intro = (props) => {

    //separator to be used for social media links
    let separator;

    return (
        <React.Fragment>
            <Header>
                <Title>{WEBSITE_TEXT.intro.title}</Title>
                <Subtitle>{WEBSITE_TEXT.intro.subtitle[props.lang]}</Subtitle>
                <AuthorsPhoto>
                    <img src={authorsPhoto} alt='Author’s photo'/>
                </AuthorsPhoto>
            </Header>
            {WEBSITE_TEXT.intro.body[props.lang].map((paragraph, k) => {
                    return (
                        <p key={k}>
                            {paragraph}
                        </p>
                    )
                }
            )}
            <p>
                {WEBSITE_TEXT.intro.social.map((link, k) => {
                        //don't display the separator after the last link
                        separator = (k < (WEBSITE_TEXT.intro.social.length - 1)) ? ' | ' : '';
                        return (
                            <a key={k} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}{separator}</a>
                        )
                    }
                )}
            </p>
            {WEBSITE_TEXT.intro.patreon[props.lang]}
            <p>Consectetur adipisicing elit. Architecto dignissimos ducimus est nesciunt quas vero. Aliquid amet
                aspernatur at blanditiis cupiditate dignissimos ducimus ea eaque eius excepturi facere facilis ipsum
                iure iusto labore maiores minus molestias nobis non odio, odit perferendis perspiciatis porro possimus,
                quae qui quia quibusdam quis rerum sapiente sed sint, suscipit tempore unde voluptate voluptatem
                voluptatibus? Doloremque ducimus ea natus.</p>
            <p>Dolor sit amet, consectetur adipisicing elit. Ab aperiam aut dolores ea, eum explicabo fuga ipsum iusto
                mollitia nemo odit pariatur porro quam quasi recusandae rem repellendus, sed totam velit voluptatum?</p>
            <p><AnchorLink href='#publications'>Publications</AnchorLink></p>
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