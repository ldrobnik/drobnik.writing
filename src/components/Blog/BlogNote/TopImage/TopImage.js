import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {TopImageWrapper, TopImageCredits} from '../../../../styled';
import {AnimatedPhoto} from '../../../../posed';
import {WEBSITE_TEXT} from '../../../../data/constants';

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
        //reset image source every time pathname changes
        setImageSrc('');
        importImage(props.id);
        console.log(`${WEBSITE_TEXT.blog.imageBy} ${props.author} ${WEBSITE_TEXT.blog.via} ${props.source}`);
    }, [props.reload])

    return (

        <AnimatedPhoto
            pose={imageSrc ? 'visible' : 'hidden'}>
            <TopImageWrapper>
                <img
                    src={imageSrc}
                    alt={props.alt}
                />
            </TopImageWrapper>
            <TopImageCredits>
                {`${WEBSITE_TEXT.blog.imageBy} ${props.author} ${WEBSITE_TEXT.blog.via} ${props.source}`}
            </TopImageCredits>
        </AnimatedPhoto>
    );
};

const mapStateToProps = state => {
    return {
        reload: state.pageReload
    };
};

export default connect(mapStateToProps)(TopImage);