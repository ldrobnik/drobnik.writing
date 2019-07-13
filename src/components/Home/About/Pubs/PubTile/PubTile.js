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

const PubTile = (props) => {

    //specifies whether additional content should be displayed on hover
    const [mouseEnter, setMouseEnter] = useState(false);

    //handles change of the hover state
    const mouseEnterHandler = () => {
        setMouseEnter(true);
    };

    const mouseLeaveHandler = () => {
        setMouseEnter(false);
    };

    //text to be displayed for forthcoming publications depending on the current language
    const forthcoming = (props.lang === 'en') ? 'forthcoming' : 'w przygotowaniu';

    //description to be diplayed depending on the current language
    const description = (props.lang === 'en') ? props.descriptionEn : props.descriptionPl;

    //year to be displayed - if no year available, display the 'forthcoming' info
    const year = (props.year === '') ? forthcoming : props.year;

    //text to be displayed if the issue number/name is available
    const issue = (props.issue !== undefined) ? <p><i>{props.issue}</i></p> : <div></div>;

    //info to be include in the tile (different when cursor is over the element)
    const tileDescription = !mouseEnter ?
        <React.Fragment>
            <p><i>{year}</i></p>
            <h4>{props.title}</h4>
            <p>{props.language}</p>
        </React.Fragment> :
        <React.Fragment>
            {issue}
            <p>{description}</p>
        </React.Fragment>;

    //the above description wrapped in a tile element
    const tileContent = <Tile
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
    >
        {tileDescription}
    </Tile>;

    //if the url property contains an anchor link, display AnchorLink, otherwise display normal link
    const tile = (props.url.charAt(0) === '#') ?
        <AnchorLink href={props.url}>
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