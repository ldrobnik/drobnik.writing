import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Tile = styled.div`
    background-color: ${props => props.theme.background};
    margin: 5px;
    height: 12em;
    width: 14em;
    text-align: center;
`;

const PressTile = (props) => {

    return (
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <Tile>
                    {props.title}
                </Tile>
            </a>
    );
};

export default PressTile;