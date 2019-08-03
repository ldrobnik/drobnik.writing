import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
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

    //updates the count of loaded elements
    const updateLoadedCount = () => {
        //increase the Redux store loaded element count
        props.onLoadCountChange(props.numberLoaded+1);
    };

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

const mapStateToProps = state => {
    return {
        numberLoaded: state.loadedCount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadCountChange: (newCount) => dispatch({type: actionTypes.SET_LOADING, loadedCount: newCount})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CentredPhoto);