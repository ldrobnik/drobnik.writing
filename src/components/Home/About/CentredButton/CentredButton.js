import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  background-color: ${props => props.theme.background};
  opacity: ${props => props.theme.translucent};
  font-size: ${props => props.theme.bodySize};
  padding: 0.8em;
  margin: 0 0.5em;
    
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


const CentredButton = (props) => {

    //constant holding the button content
    const buttonContent = props.message;
    console.log(props.message);

    //variable holding the button content wrapped in a Link or a element
    let workingButton;

    if (props.link) {
        workingButton =
            <Link to={props.path}>
                <ButtonWrapper>
                    {buttonContent}
                </ButtonWrapper>
            </Link>;
    } else {
        workingButton =
            <a
                href={props.path}
                target="_blank"
                rel="noopener noreferrer">
                <ButtonWrapper>
                    {buttonContent}
                </ButtonWrapper>
            </a>;
    }

    return (
        <Wrapper>
            {workingButton}
        </Wrapper>
    );
};

export default CentredButton;