import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {setPageReload} from "../../../actions";
import {POP_KEYFRAMES} from "../../../data/constants";

/*STYLED COMPONENTS*/
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
       margin: 0 4em;
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

export const CentredButton = (props) => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //constant holding the button content
    const buttonMessage = props.message;

    //the content of the button
    const buttonContent = (
        <ButtonWrapper>
            {buttonMessage}
        </ButtonWrapper>
    );


    return (
        <Wrapper>
            {(props.path[0] === '/') ?
                <Link
                    to={props.path}
                    onClick={reloadPage}>
                    {buttonContent}
                </Link> :
                <a
                    href={props.path}
                    target="_blank"
                    rel="noopener noreferrer">
                    {buttonContent}
                </a>
            }
        </Wrapper>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(CentredButton);