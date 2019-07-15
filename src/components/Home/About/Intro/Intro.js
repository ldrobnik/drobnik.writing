import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import { WEBSITE_TEXT } from '../../../../data/constants';
const StyledWrapper = styled.div`

`;

const Intro = (props) => {

    //separator to be used for social media links
    let separator;

    return (
        <StyledWrapper>
            {WEBSITE_TEXT.intro.body[props.lang].map((paragraph, k) => {
                return (
                    <p key={k}>
                        {paragraph}
                    </p>
                )
                }
            )}
            {WEBSITE_TEXT.intro.patreon[props.lang]}
            <p>
                {WEBSITE_TEXT.intro.social.map((link, k) => {
                    //don't display the separator after the last link
                    separator = (k < (WEBSITE_TEXT.intro.social.length - 1)) ? ' | ' : '';
                    console.log(WEBSITE_TEXT.intro.social.length, k);
                    return (
                            <p key={k}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>{separator}
                            </p>
                        )
                    }
                )}
            </p>
            <p>Consectetur adipisicing elit. Architecto dignissimos ducimus est nesciunt quas vero. Aliquid amet aspernatur at blanditiis cupiditate dignissimos ducimus ea eaque eius excepturi facere facilis ipsum iure iusto labore maiores minus molestias nobis non odio, odit perferendis perspiciatis porro possimus, quae qui quia quibusdam quis rerum sapiente sed sint, suscipit tempore unde voluptate voluptatem voluptatibus? Doloremque ducimus ea natus.</p>
            <p>Dolor sit amet, consectetur adipisicing elit. Ab aperiam aut dolores ea, eum explicabo fuga ipsum iusto mollitia nemo odit pariatur porro quam quasi recusandae rem repellendus, sed totam velit voluptatum?</p>
            <p><AnchorLink href='#publications'>Publications</AnchorLink></p>
            <p><AnchorLink href='#read'>Read</AnchorLink></p>
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Intro);