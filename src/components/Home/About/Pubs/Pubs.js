import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { WEBSITE_TEXT } from '../../../../data/constants';

import PubList from './PubList/PubList';
import PubTile from './PubList/PubTile/PubTile';

import { PUBLICATIONS } from '../../../../data/constants';

// STYLES
const TileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-wrap: wrap;
  padding: 1em 2em;
  width: 100%;
  cursor: pointer;
`;

const Pubs = (props) => {

    //specifies whether texts in English should be displayed
    const [en, setEn] = useState(true);

    //specifies whether texts in Polish should be displayed
    const [pl, setPl] = useState(true);

    //toggles the display of English pubs and if both en and pl are false, sets pl to true
    const setEnHandler = () => {
        setEn(!en);
        if (en && !pl) setPl(true);
    };

    //toggles the display of Polish pubs and if both en and pl are false, sets en to true
    const setPlHandler = () => {
        setPl(!pl);
        if (!en && pl) setEn(true);
    };

    return (
        <React.Fragment>
            <h1>{WEBSITE_TEXT.publications.title[props.lang]}</h1>
            <label>
                <p>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].label}</p>
                <input
                    type='checkbox'
                    checked={en}
                    onChange={setEnHandler}
                />
                {WEBSITE_TEXT.publications.chooseLanguage[props.lang].english}
            </label>
            <label>
               <input
                type='checkbox'
                checked={pl}
                onChange={setPlHandler}
            />
                {WEBSITE_TEXT.publications.chooseLanguage[props.lang].polish}
            </label>

            <h3>{WEBSITE_TEXT.publications.headlines[props.lang].books}</h3>

            <TileContainer>
                <PubList
                    en={en}
                    pl={pl}
                    type="books"/>
            </TileContainer>
            <TileContainer>
                {PUBLICATIONS.books.map((book) => {
                    if ((en && (book.language === 'en')) || (pl && (book.language == 'pl'))) {
                        return (
                            <PubTile
                                title={book.title}
                                year={book.year}
                                url={book.url}
                                descriptionPl={book.descriptionPl}
                                descriptionEn={book.descriptionEn}
                                language={book.language}
                                pieceTitle={book.pieceTitle}
                                key={book.title}/>
                        )
                    }
                })}
            </TileContainer>
            <h3>{WEBSITE_TEXT.publications.headlines[props.lang].press}</h3>
            <TileContainer>
                {PUBLICATIONS.press.map((press) => {
                    if ((en && (press.language === 'en')) || (pl && (press.language == 'pl'))) {
                        return (
                            <PubTile
                                title={press.title}
                                issue={press.issue}
                                year={press.year}
                                url={press.url}
                                descriptionPl={press.descriptionPl}
                                descriptionEn={press.descriptionEn}
                                language={press.language}
                                pieceTitle={press.pieceTitle}
                                key={press.title + press.issue}/>
                        )
                    }
                })}
            </TileContainer>
            <h3>{WEBSITE_TEXT.publications.headlines[props.lang].collections}</h3>
            <TileContainer>
            {PUBLICATIONS.collections.map((collection) => {
                if ((en && (collection.language === 'en')) || (pl && (collection.language == 'pl'))) {
                    return (
                        <PubTile
                            title={collection.title}
                            year={collection.year}
                            url={collection.url}
                            descriptionPl={collection.descriptionPl}
                            descriptionEn={collection.descriptionEn}
                            language={collection.language}
                            pieceTitle={collection.pieceTitle}
                            key={collection.title}/>
                    )
                }
            })}
            </TileContainer>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Pubs);