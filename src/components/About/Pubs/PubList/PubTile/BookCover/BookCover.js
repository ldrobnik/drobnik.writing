import React, {useEffect, useState} from 'react';
import {BookCoverWrapper, BookCoverPhoto} from '../../../../../../styles/about';
import {BookCoverAnimatedPic} from '../../../../../../animations/about';

const BookCover = props => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //specifies the image source
    const [imageSrc, setImageSrc] = useState('');

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    //imports the appropriate image
    const importImage = src => {
        import(`../../../../../../assets/images/${src}`)
            .then(res => {
                setImageSrc(res.default);
            })
            .catch(err => console.log(src, err));
    }

    useEffect(() => {
        //import the image once the component loads
        importImage(props.source);
    }, [])

    return (
        <BookCoverWrapper>
            <BookCoverAnimatedPic
                pose={visible ? 'visible' : 'hidden'}>
                <BookCoverPhoto>
                    <img
                        src={imageSrc}
                        alt={props.altText}
                        onLoad={showPhoto}
                    />
                </BookCoverPhoto>
            </BookCoverAnimatedPic>
        </BookCoverWrapper>
    );
};

export default BookCover;