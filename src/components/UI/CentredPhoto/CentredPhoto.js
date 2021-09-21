import React, {useState} from 'react';
import {CentredPhotoWrapper, Photo, PhotoLink} from '../../../styles/shared';
import {AnimatedPhoto} from '../../../animations/shared';

const CentredPhoto = props => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <CentredPhotoWrapper>
            <AnimatedPhoto
                pose={visible ? 'visible' : 'hidden'}>
                {props.link ?
                    <PhotoLink>
                        <a href={props.link} target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src={props.src}
                                alt={props.alt}
                                onLoad={showPhoto}
                            />
                        </a>
                    </PhotoLink>
                    : <Photo>
                        <img
                            src={props.src}
                            alt={props.alt}
                            onLoad={showPhoto}
                        />
                    </Photo>}
            </AnimatedPhoto>
        </CentredPhotoWrapper>
    );
};

export default CentredPhoto;