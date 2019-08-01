import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {PUBLICATIONS} from "../../../../../data/constants";
import PubTile from "./PubTile/PubTile";

const StyledWrapper = styled.div`

`;

const PubList = (props) => {

    return (
        <StyledWrapper>
            {PUBLICATIONS[props.type].map((pub) => {
                if ((props.en && (pub.language === 'en')) || (props.pl && (pub.language == 'pl'))) {
                    return (
                        <PubTile
                            title={pub.title}
                            year={pub.year}
                            url={pub.url}
                            descriptionPl={pub.descriptionPl}
                            descriptionEn={pub.descriptionEn}
                            language={pub.language}
                            pieceTitle={pub.pieceTitle}
                            key={pub.title}/>
                    )
                }
            })}
        </StyledWrapper>
    );
};

export default PubList;