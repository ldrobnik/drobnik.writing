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

    //shows content after loading
    const showContent = () => {

        let delay = props.parentVisible ? 500 : 1000;

            setTimeout(() => setVisible(true), delay);

    }

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

        //if no image is loaded, load it
        if (imageSrc.length < 1) {
            setTimeout(() => setVisible(false), 500);
            importImage(props.id);
        }
    })

    useEffect(() => {
        //reset image source every time pathname changes
        setVisible(false);
        setImageSrc('');
        importImage(props.id);
    }, [props.reload, props.pathname])

    return (
        <React.Fragment>
            {
                (imageSrc.length > 0) &&
                <AnimatedPhoto
                    pose={visible ? 'visible' : 'hidden'}>
                    <TopImageWrapper>
                        <figure>
                            <img
                                src={imageSrc}
                                alt={props.alt}
                                onLoad={() => showContent()}
                            />
                            <figcaption>
                                <TopImageCredits>
                                    {`${WEBSITE_TEXT.blog.imageBy} ${props.author} ${WEBSITE_TEXT.blog.via} ${props.src}`}
                                </TopImageCredits>
                            </figcaption>
                        </figure>
                    </TopImageWrapper>
                </AnimatedPhoto>
            }
        </React.Fragment>

    );
};

const mapStateToProps = state => {
    return {
        reload: state.pageReload
    };
};

export default connect(mapStateToProps)(TopImage);