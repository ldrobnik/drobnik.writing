import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {TopImageWrapper, TopImageCredits} from '../../../../styled';
import {AnimatedPhoto} from '../../../../posed';
import {WEBSITE_TEXT} from '../../../../data/constants';

const TopImage = props => {

    //specifies whether the image should be visible
    const [visible, setVisible] = useState(false);

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
        setVisible(false);
        importImage(props.id);

        //show the image after loading
        if (imageSrc.length > 0) {
            setTimeout(() => setVisible(true), 800)
        }
    }, [props.reload, props.pathname])

    return (

        <AnimatedPhoto
            pose={visible ? 'visible' : 'hidden'}>
            <TopImageWrapper>
                <img
                    src={imageSrc}
                    alt={props.alt}
                />
            </TopImageWrapper>
            <TopImageCredits>
                {`${WEBSITE_TEXT.blog.imageBy} ${props.author} ${WEBSITE_TEXT.blog.via} ${props.src}`}
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