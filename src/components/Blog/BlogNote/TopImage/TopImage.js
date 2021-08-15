import React, {useEffect, useState} from 'react';
import {TopImageWrapper, TopImageCredits} from '../../../../styled';
import {AnimatedPhoto} from '../../../../posed';
import temporaryImage from '../../../../assets/images/blog/markdown.jpg'

const TopImage = props => {

    //specifies the image source
    const [imageSrc, setImageSrc] = useState('');


    //imports the appropriate image
    const importImage = id => {
        import(`./../../../../assets/images/blog/${id}.jpg`)
            .then(res => {
                fetch(res.default)
                    .then(res => setImageSrc(res.url))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        importImage(props.id);
    }, [])

    return (
        <TopImageWrapper>
            <AnimatedPhoto
                pose={imageSrc ? 'visible' : 'hidden'}>
                <img
                    src={imageSrc}
                    alt={props.alt}
                />
            </AnimatedPhoto>
            <TopImageCredits></TopImageCredits>
        </TopImageWrapper>
    );
};

export default TopImage;