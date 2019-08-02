import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BLUR_KEYFRAMES, POP_KEYFRAMES} from "../../../data/constants";

const Wrapper = styled.div`
  text-align: center;
  margin: 1em 0;
`;

const ButtonWrapper = styled.div`
  background-color: ${props => props.theme.background};
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
  padding: 0.8em;
  margin: 0 0.5em;
  cursor: pointer;
  display: block;
  position: relative;
  user-select: none;
  overflow: hidden;

        
    &:hover {
      animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation}
    }
    
    @media all and (min-width: ${props => props.theme.extraSmallScr}) {
       margin: 0 0.8em;;
    }
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
       margin: 0 1em;
    }
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      margin: 0 2em;
    }
    
    @media all and (min-width: ${props => props.theme.largeScr}) {
       margin: 0 20%;
    }
    
    @media all and (min-width: ${props => props.theme.extraLargeScr}) {
       margin: 0 25%;
    }

    
`;

const Capital = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 24em;
  text-transform: uppercase;
  //font-style: italic;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const CentredButton = (props) => {

    //constant holding the button content
    const buttonContent = props.message;
    console.log(props.message);

    //variable holding the button content wrapped in a Link or a element
    let workingButton;

    //decorative letter to be displayed on the button
    const capital = props.capital;

    if (props.link) {
        workingButton = (

            <Link to={props.path}>
                <ButtonWrapper>
                    {buttonContent}
                    <Capital>
                        {capital}
                    </Capital>
                </ButtonWrapper>
            </Link>);

    } else {
        workingButton = (

            <a
                href={props.path}
                target="_blank"
                rel="noopener noreferrer">
                <ButtonWrapper>
                    {buttonContent}
                    <Capital>
                        {capital}
                    </Capital>
                </ButtonWrapper>
            </a>
        );
    }

    return (
        <Wrapper>
            {workingButton}
        </Wrapper>
    );
};

export default CentredButton;