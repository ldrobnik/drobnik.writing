import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from "react-router-dom";

import {WEBSITE_TEXT, PULSATE_KEYFRAMES} from "../../../data/constants";


const Links = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${props => props.theme.captionSize}
  user-select: none;
  margin: 1em 0;
  text-decoration: underline;
  
  div {
    padding: 0 0.3em;
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }  
  }
`;

const SubpageLinks = props => {
    //The Back to Top link
    const top = <AnchorLink href='#top'>{WEBSITE_TEXT.text.top[props.lang]}</AnchorLink>;

//The Home link
    const home = <Link
        to={'/'}
        onClick={props.reloadPage}
    >{WEBSITE_TEXT.text.home[props.lang]}</Link>;

    return (
        <Links>
            <div>{top}</div>
            <div>{home}</div>
        </Links>
    );
};



export default SubpageLinks;
