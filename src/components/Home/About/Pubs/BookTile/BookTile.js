import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';

const Tile = styled.div`
    background-color: ${props => props.theme.background};
    margin: 5px;
    height: 12em;
    width: 14em;
    text-align: center;
`;

const BookTile = (props) => {

    //if the url property contains an anchor link, display AnchorLink, otherwise display normal link
    const tile = (props.url.charAt(0) === '#') ?
        <AnchorLink href={props.url}>
            <Tile>
            {props.title}
            </Tile>
        </AnchorLink> :
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Tile>
                {props.title}
            </Tile>
        </a>;

    return (
        <div>
            {tile}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};
export default connect(mapStateToProps)(BookTile);