import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {PUBLICATIONS} from "../../../../../data/constants";
import PubTile from "./PubTile/PubTile";

const TileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
`;

const PubList = (props) => {

    return (
        <TileContainer>
            {PUBLICATIONS[props.type].map((pub, k) => {
                if ((props.en && (pub.language === 'en')) || (props.pl && (pub.language == 'pl'))) {
                    return (
                        <PubTile
                            title={pub.title}
                            year={pub.year}
                            issue={pub.issue}
                            url={pub.url}
                            descriptionPl={pub.descriptionPl}
                            descriptionEn={pub.descriptionEn}
                            language={pub.language}
                            pieceTitle={pub.pieceTitle}
                            key={k}/>
                    )
                }
            })}
        </TileContainer>
    );
};

export default PubList;