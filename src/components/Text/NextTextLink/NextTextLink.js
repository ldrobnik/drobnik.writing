import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import styled from 'styled-components';

import * as actionTypes from "./../../../store/actions";
import {TEXTS, WEBSITE_TEXT, POP_KEYFRAMES} from "./../../../data/constants";

/*STYLED COMPONENTS*/
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

    //sets off page reloading animation
    const reloadPage = () => {
        //scroll up for better transition
        window.scrollTo(0,800);

        //change page reload redux state
        props.onReloadChange(true);
    };

    return (
        <Link
            to={'/texts/' + props.textName}
            onClick={reloadPage}>
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

const mapDispatchToProps = dispatch => {
    return {
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};

export default connect(null, mapDispatchToProps)(NextTextLink);