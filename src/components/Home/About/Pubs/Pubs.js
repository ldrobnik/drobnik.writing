import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import BookTile from './BookTile/BookTile';
import PressTile from './PressTile/PressTile';
import CollectionTile from './CollectionTile/CollectionTile';

import { PUBLICATIONS } from '../../../../data/constants';

const StyledWrapper = styled.div`

`;

const Pubs = (props) => {
    let year = '';
    return (
        <StyledWrapper>
            <h1>Publications</h1>
            <h3>Books</h3>
            {PUBLICATIONS.books.map((book) => {
                return (
                    <BookTile
                        title={book.title}
                        year={book.year}
            url={book.url}
            descriptionPl={book.descriptionPl}
            descriptionEn={book.descriptionEn}
            language={book.language}
                        key={book.title}/>
                )
            })}
            <h3>Press</h3>
            {PUBLICATIONS.press.map((press) => {
                return (
                    <BookTile
                        title={press.title}
                        issue={press.issue}
                        year={press.year}
                        url={press.url}
                        descriptionPl={press.descriptionPl}
                        descriptionEn={press.descriptionEn}
                        language={press.language}
                        key={press.title + press.issue}/>
                )
            })}
            <h3>Collections</h3>
            {PUBLICATIONS.collections.map((collection) => {
                return (
                    <BookTile
                        title={collection.title}
                        year={collection.year}
                        url={collection.url}
                        descriptionPl={collection.descriptionPl}
                        descriptionEn={collection.descriptionEn}
                        language={collection.language}
                        key={collection.title}/>
                )
            })}
        </StyledWrapper>
    );
};

export default Pubs;