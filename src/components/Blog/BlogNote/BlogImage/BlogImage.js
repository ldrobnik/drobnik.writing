import React, {useState, useEffect} from 'react';
import SmallSpinner from '../../../UI/SmallSpinner/SmallSpinner';

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
    }, [props.src])

    return (
        <React.Fragment>
            {imageSrc ?
                <img
                    src={imageSrc}
                    alt={props.alt}
                    className={'border'}
                /> :
                <SmallSpinner />
            }
        </React.Fragment>
    );
};

export default BlogImage;