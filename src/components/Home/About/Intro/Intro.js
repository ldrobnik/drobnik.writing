import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { WEBSITE_TEXT } from '../../../../data/constants';
const StyledWrapper = styled.div`

`;

const Intro = (props) => {

    return (
        <StyledWrapper>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem provident quidem totam voluptates.</p>
            <p>Consectetur adipisicing elit. Architecto dignissimos ducimus est nesciunt quas vero. Aliquid amet aspernatur at blanditiis cupiditate dignissimos ducimus ea eaque eius excepturi facere facilis ipsum iure iusto labore maiores minus molestias nobis non odio, odit perferendis perspiciatis porro possimus, quae qui quia quibusdam quis rerum sapiente sed sint, suscipit tempore unde voluptate voluptatem voluptatibus? Doloremque ducimus ea natus.</p>
            <p>Dolor sit amet, consectetur adipisicing elit. Ab aperiam aut dolores ea, eum explicabo fuga ipsum iusto mollitia nemo odit pariatur porro quam quasi recusandae rem repellendus, sed totam velit voluptatum?</p>
            <p><AnchorLink href='#publications'>Publications</AnchorLink></p>
            <p><AnchorLink href='#read'>Read</AnchorLink></p>
        </StyledWrapper>
    );
};

export default Intro;