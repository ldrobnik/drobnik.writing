import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {LINKS} from "../../data/constants";
import QuickLink from "./QuickLink/QuickLink";

const Wrapper = styled.div`
   @media all and (min-width: ${props => props.theme.extraSmallScr}) {
      padding: 1em 3em;
    }
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
      padding: 1em 5%;
    }
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding: 1em 10%;
    }
    
    @media all and (min-width: ${props => props.theme.largeScr}) {
      padding: 1em 12%;
    }
    
    @media all and (min-width: ${props => props.theme.extraLargeScr}) {
      padding: 1em 15%;
    }
    
    padding: 1em 1em;
`;

const QuickLinks = (props) => {

    return (
        <Wrapper>
            {LINKS.map((link, k) => {
                return (
                    <QuickLink
                        title={link.title}
                        subtitle={link.subtitle}
                        url={link.url}
                        key={k}/>
                )
            })}
        </Wrapper>
    );
};

export default QuickLinks;
