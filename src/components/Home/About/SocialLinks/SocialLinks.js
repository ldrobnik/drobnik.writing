import React from 'react';
import styled from 'styled-components';
import {WEBSITE_TEXT} from "../../../../data/constants";


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    font-size: ${props => props.theme.bodySize};
    margin: 1.5em 0;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 3vw;
    }
    
    @media all and (max-width: ${props => props.theme.extraSmallScr}) {
      font-size: 2vw;
    }
    
    div {
      padding: 8px;
    }
`;

const SocialLinks = (props) => {

    return (
        <Wrapper>

            {WEBSITE_TEXT.intro.social.map((link, k) => {
                    return (
                        <a key={k} href={link.url} target="_blank"
                           rel="noopener noreferrer">{link.name}</a>
                    )
                }
            )}

        </Wrapper>
    );
};

export default SocialLinks;