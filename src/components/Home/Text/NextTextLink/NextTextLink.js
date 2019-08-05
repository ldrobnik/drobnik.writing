import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {TEXTS, WEBSITE_TEXT, POP_KEYFRAMES} from "../../../../data/constants";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation};
  }
`;

const UpNext = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.bodySize}
  user-select: none;
  margin: 1em 0;
`;

const Line = styled.div`
  height: 0.5em;
  width: 6em;
  margin: 1em;
  background-color: ${props => props.theme.darkColor};
`;

const NextTextLink = (props) => {


    return (

        <Link
            to={'/texts/' + props.textName}>
            <Wrapper>
                <Line/>
                <UpNext>
                    <div>
                        <i>
                            {WEBSITE_TEXT.text.nextText[props.lang]}
                            {TEXTS[props.lang][props.textName].title}
                        </i>
                    </div>
                </UpNext>
                <Line/>
            </Wrapper>
        </Link>


    );
};

export default NextTextLink;