import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import {PUBLICATIONS, WEBSITE_TEXT, TEXT_NAMES, TEXTS} from '../../../../data/constants';
import PubTile from "../Pubs/PubTile/PubTile";

const StyledWrapper = styled.div`

`;

const Read = (props) => {

    return (
        <StyledWrapper>
            <h1>{WEBSITE_TEXT.read.title[props.lang]}</h1>
            <p>{WEBSITE_TEXT.read.introduction[props.lang]}</p>
            {TEXT_NAMES.map((text) => {
                    let textLink = '/texts/' + text;
                    console.log(text);
                    return (
                        <Link
                            to={textLink}
                            key={text}
                        >
                            <p>{TEXTS[props.lang][text].title}</p>
                        </Link>
                        )
            })}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Read);