import React, {useState, useEffect} from 'react';
import {TopImageWrapper, TopImageCredits} from '../../../../styles/blog';
import {AnimatedContent} from '../../../../animations/shared';

export const TopImage = props => {

    let [visible, setVisible] = useState(false);

    //shows the image
    const showImage = () => {
        setVisible(true);
    }

    //do not show the content until the page is loaded
    return (<AnimatedContent
                    pose={visible ? 'visible' : 'hidden'}>
                    {(props.imageSrc.length > 0) &&
                    <TopImageWrapper className={'tintedImage'}>
                        <figure>
                            <img
                                src={props.imageSrc}
                                alt={props.imageCredits.alt}
                                onLoad={showImage}
                            />
                        </figure>
                    </TopImageWrapper>}
                    {
                        props.imageCredits.description &&
                        <figcaption>
                            <TopImageCredits>
                                {props.imageCredits.description}
                            </TopImageCredits>
                        </figcaption>
                    }
                </AnimatedContent>);
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        noticeVisible: state.dataNoticeVisible,
        noticeAccepted: state.dataNoticeAccepted,
        reload: state.pageReload,
        loaded: state.pageLoaded
    };
};

export default TopImage;