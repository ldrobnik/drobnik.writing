import React, {useState} from 'react';
import {BookCoverWrapper, BookCoverPhoto} from '../../../../../../styles/about';
import {BookCoverAnimatedPic} from '../../../../../../animations/about';

const BookCover = props => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <BookCoverWrapper>
            <BookCoverAnimatedPic
                pose={visible ? 'visible' : 'hidden'}>
                <BookCoverPhoto>
                    <img
                        src={props.source}
                        alt={props.altText}
                        onLoad={showPhoto}
                    />
                </BookCoverPhoto>
            </BookCoverAnimatedPic>
        </BookCoverWrapper>
    );
};

export default BookCover;