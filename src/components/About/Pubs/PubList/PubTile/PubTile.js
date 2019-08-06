import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {POP_KEYFRAMES} from "./../../../../../data/constants";

/* STYLED COMPONENTS */
const Tile = styled.div`
    background-color: ${props => props.theme.background};
    position: relative;
    height: 12em;
    width: 15em;
    padding: 0.2em 0.5em;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
`;

const TileWrapper = styled.div`
  display: table;
  margin: 0.8em 0;
  
  &:hover {
     animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation};
  }
`;

const Year = styled.div`
  font-size: ${props => props.theme.captionSize};
  margin-bottom: 0.5em;
`;

const Title = styled.div`
  font-size: ${props => props.theme.bodySize};
  text-transform: uppercase;
  font-weight: bold;
`;

const Separator = styled.div`
  margin: 0.5em auto;
  height: 0.5em;
  width: 8em;
  background-color: ${props => props.theme.darkColor};
`;

const Issue = styled.div`
  font-size: ${props => props.theme.smallCaptionSize};
  margin-bottom: 0.5em;
`;

const Description = styled.div`
  font-size: ${props => props.theme.smallCaptionSize};
`;

const PubTile = (props) => {

    //text to be displayed for forthcoming publications depending on the current language
    const forthcoming = (props.lang === 'en') ? 'forthcoming' : 'w przygotowaniu';

    //description to be diplayed depending on the current language
    const description = (props.lang === 'en') ? props.descriptionEn : props.descriptionPl;

    //year to be displayed - if no year available, display the 'forthcoming' info
    const year = (props.year === '') ? forthcoming : props.year;

    //text to be displayed if the issue number/name is available
    const issue = (props.issue !== undefined) ? <p><i>{props.issue}</i></p> : <div></div>;

    //the above description wrapped in a tile element
    const tileContent =
         <TileWrapper>
            <Tile>
                <Year><i>{year}</i></Year>
                <Title>{props.title}</Title>
                <Separator/>
                <Issue>{issue}</Issue>
                <Description>{description}</Description>
            </Tile>
        </TileWrapper>;

    //if the url property contains an anchor link, display AnchorLink, otherwise display normal link
    const tile = (props.url.charAt(0) === '#') ?
        <AnchorLink href={props.url} offset="60px">
            {tileContent}
        </AnchorLink> :
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            {tileContent}
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
export default connect(mapStateToProps)(PubTile);