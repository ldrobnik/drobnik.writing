import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import * as actionTypes from "../../../store/actions";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em;
  position: relative; 
`;

const Photo = styled.div`
  height: 12em;
  opacity: ${props => props.theme.translucent};
  z-index: 60;
    img {
      height: 100%;
    }
`;

const Capital = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 24em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur( ${props => props.theme.heavyBlur});
  user-select: none;
`;



const CentredPhoto = (props) => {


    return (
        <Wrapper>
            <Photo>
                <img
                    src={props.source}
                    alt={props.altText}
                    />
            </Photo>
            <Capital>
                {props.capital}
            </Capital>
        </Wrapper>
    );
};



export default CentredPhoto;