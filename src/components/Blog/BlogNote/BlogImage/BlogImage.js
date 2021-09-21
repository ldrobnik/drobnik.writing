import React, {useState, useEffect} from 'react';
import SmallSpinner from '../../../UI/SmallSpinner/SmallSpinner';
import {AnimatedPhoto} from '../../../../animations/shared';
import {BlogImg} from '../../../../styles/blog';

const BlogImage = props => {

    //specifies the image source
    const [imageSrc, setImageSrc] = useState('');


    //imports the appropriate image
    const importImage = src => {
        import(`./../../../../assets/images/blog/${src}`)
            .then(res => {
                setImageSrc(res.default);
            })
            .catch(err => console.log(src, err));
    }

    useEffect(() => {
        //import the image once the component loads
        importImage(props.src);
    }, [])

    return (
        <React.Fragment>
            <AnimatedPhoto
                pose={imageSrc ? 'visible' : 'hidden'}>
                <BlogImg
                    src={imageSrc}
                    alt={props.alt}
                    className={'border'}
                />
            </AnimatedPhoto>
            {!imageSrc &&
            <SmallSpinner/>
            }

        </React.Fragment>
    );
};

export default BlogImage;