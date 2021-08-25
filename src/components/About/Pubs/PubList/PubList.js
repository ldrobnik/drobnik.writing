import React from 'react';
import {PoseGroup} from 'react-pose';
import {PubTileContainer} from '../../../../styled';
import {PubAnimatedTile} from '../../../../posed';
import {PUBLICATIONS} from './../../../../data/constants';
import PubTile from './PubTile/PubTile';

const PubList = props => {

    return (
        <PubTileContainer>
            <PoseGroup>
                {PUBLICATIONS[props.type].map((pub, k) => {
                    if ((props.en && (pub.language === 'en')) || (props.pl && (pub.language === 'pl'))) {
                        return (
                            <PubAnimatedTile
                                pose={props.visible ? 'visible' : 'hidden'}
                                key={k}>
                                <PubTile
                                    type={props.type}
                                    title={pub.title}
                                    year={pub.year}
                                    cover={pub.cover}
                                    altText={pub.altText}
                                    issue={pub.issue}
                                    url={pub.url}
                                    descriptionPl={pub.descriptionPl}
                                    descriptionEn={pub.descriptionEn}
                                    language={pub.language}
                                    pieceTitle={pub.pieceTitle}
                                    key={k}
                                />
                            </PubAnimatedTile>
                        )
                    }
                    return null;
                })
                }
            </PoseGroup>
        </PubTileContainer>
    );
};

export default PubList;