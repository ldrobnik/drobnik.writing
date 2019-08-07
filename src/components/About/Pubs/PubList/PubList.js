import React from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose';

import {PUBLICATIONS} from "./../../../../data/constants";

import PubTile from "./PubTile/PubTile";

/* STYLED COMPONENTS */
const TileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
`;

/* POSE */
const AnimatedTile = posed.div({
    enter: {
        opacity: 1,
        filter: 'blur(0)',
        transform: 'skew(0, 0)',
        transition: {
            ease: 'easeOut',
            duration: 200
        }
    },
    exit: {
        opacity: 0,
        filter: 'blur(20px)',
        transform: 'skew(5deg, 10deg)',
        transition: {duration: 200}
    }
});

const PubList = (props) => {

    return (
        <TileContainer>
            <PoseGroup>
               {PUBLICATIONS[props.type].map((pub, k) => {
                        if ((props.en && (pub.language === 'en')) || (props.pl && (pub.language === 'pl'))) {
                            return (
                                <AnimatedTile key={k}>
                                    <PubTile
                                        title={pub.title}
                                        year={pub.year}
                                        issue={pub.issue}
                                        url={pub.url}
                                        descriptionPl={pub.descriptionPl}
                                        descriptionEn={pub.descriptionEn}
                                        language={pub.language}
                                        pieceTitle={pub.pieceTitle}
                                        key={k}
                                    />
                                </AnimatedTile>
                            )}
                        return null;
                    })
                }
            </PoseGroup>
        </TileContainer>
    );
};

export default PubList;