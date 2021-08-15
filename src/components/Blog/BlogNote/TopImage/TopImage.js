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

        //if no image is loaded, load it
        if (imageSrc.length < 1) {
            setTimeout(() => setVisible(false), 500);
            importImage(props.id);
        }

        //show the image after loading
        if (imageSrc.length > 0 && props.parentVisible) {
            setTimeout(() => setVisible(true), 500);
        }
    })

    useEffect(() => {
        //reset image source every time pathname changes
        setVisible(false);
        setImageSrc('');
        importImage(props.id);

        //show the image after loading
        if (imageSrc.length > 0 && props.parentVisible) {
            setTimeout(() => setVisible(true), 500);
        }
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