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
            <h3>Collections</h3>
        </StyledWrapper>
    );
};

export default Pubs;