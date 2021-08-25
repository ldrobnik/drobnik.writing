import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    PublicationTile,
    PubBookTile,
    PubTileWrapper,
    PubYear,
    PubTitle,
    PubSeparator,
    PubIssue,
    PubDescription
} from '../../../../../styled';
import BookCover from './BookCover/BookCover';
import {setPageReload} from '../../../../../actions';

const PubTile = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //text to be displayed for forthcoming publications depending on the current language
    const forthcoming = (props.lang === 'en') ? 'forthcoming' : 'w przygotowaniu';

    //description to be diplayed depending on the current language
    const description = (props.lang === 'en') ? props.descriptionEn : props.descriptionPl;

    //cover (displayed for books)

    const bookCover = (props.type === 'books') ? <BookCover source={props.cover} altText={props.altText[props.lang]}/> :
        <div></div>;

    //year to be displayed - if no year available, display the 'forthcoming' info
    const year = (props.year === '') ? forthcoming : props.year;

    //text to be displayed if the issue number/name is available
    const issue = (props.issue !== undefined) ? <p><em>{props.issue}</em></p> : <div></div>;

    //the above description wrapped in a tile element
    const tileContent = <React.Fragment>
        <PubYear><em>{year}</em></PubYear>
        <PubTitle>{props.title}</PubTitle>
        <PubSeparator/>
        {bookCover}
        <PubIssue>{issue}</PubIssue>
        <PubDescription>{description}</PubDescription>
    </React.Fragment>;

    //tile content formatted depending on its type

    const wrappedTileContent = (props.type === 'books') ?
        (
            <PubTileWrapper>
                <PubBookTile>
                    {tileContent}
                </PubBookTile>
            </PubTileWrapper>
        ) :
        (
            <PubTileWrapper>
                <PublicationTile>
                    {tileContent}
                </PublicationTile>
            </PubTileWrapper>
        );

    //if the url property contains an anchor link, display AnchorLink, otherwise display normal link
    const tile = (props.url.charAt(0) === '/') ?
        <Link
            to={props.url}
            onClick={reloadPage}
        >
            {wrappedTileContent}
        </Link> :
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            {wrappedTileContent}
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageReload
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PubTile);