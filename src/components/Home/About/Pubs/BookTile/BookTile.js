import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';

const StyledWrapper = styled.div`

`;

const BookTile = (props) => {

    //if the url property contains an anchor link, display AnchorLink, otherwise display normal link
    const link = (props.url.charAt(0) === '#') ?
        <AnchorLink href={props.url}>{props.title}</AnchorLink> :
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>;

    return (
        <StyledWrapper>
            {link}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};
export default connect(mapStateToProps)(BookTile);