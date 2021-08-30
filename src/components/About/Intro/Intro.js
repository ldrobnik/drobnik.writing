import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {setPageReload} from '../../../actions';
import {SectionSeparator, SmallSeparator, FADE_DURATION} from '../../../styles/shared';
import {IntroBody} from '../../../styled';
import {AnimatedContent} from '../../../animations/shared';
import {IntroAnimatedLinks, IntroAnimatedButton} from '../../../animations/about';
import {WEBSITE_TEXT} from '../../../data/constants';
import authorsPhoto from '../../../assets/images/authorsPhoto.jpg'
import PageHeading from '../../UI/PageHeading/PageHeading';
import CentredPhoto from './../../UI/CentredPhoto/CentredPhoto';
import SocialLinks from '../SocialLinks/SocialLinks';
import CentredButton from './../../UI/CentredButton/CentredButton';
import SectionLinks from '../SectionLinks/SectionLinks';
export const Intro = props => {

    //specifies whether social links and CTA button should be visible
    const [socialVisible, setSocialVisible] = useState(false);

    //gets a random CTA button out of available options
    const ctaIndex = Math.floor(Math.random() * WEBSITE_TEXT.intro.cta[props.lang].length);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //shows the social links and CTA button
    const showSocial = () => {
        setSocialVisible(true);
    };

    //hides the social links and CTA button
    const hideSocial = () => {
        setSocialVisible(false);
    };

    //show the social links after a while irrespective of waypoints
    const showSocialAnyway = () => {
        //For larger screens, show social links after a while, irrespective of the viewport position
        if (window.innerWidth > 1800) {
            setTimeout(showSocial, 2000);
        } else if (window.innerWidth > 1500) {
            setTimeout(showSocial, 4000);
        } else {
            setTimeout(showSocial, 7000);
        }
    };

    useEffect(() => {
        //show content after a while
        setTimeout(showContent, FADE_DURATION);

        //For larger screens, show social links after a while, irrespective of the viewport position
        showSocialAnyway();

    });

    //hide social links whenever the pathname or language change
    useEffect(() => {
            setTimeout(hideSocial, 100);

        },
        [props.location.pathname, props.lang]
    );

    return (
        <React.Fragment>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <PageHeading
                    title={WEBSITE_TEXT.intro.title}
                    subtitle={WEBSITE_TEXT.intro.subtitle[props.lang]}
                />
                <SmallSeparator/>
                <CentredPhoto
                    source={authorsPhoto}
                    altText={WEBSITE_TEXT.intro.altText[props.lang]}
                />
                <IntroBody>
                    {WEBSITE_TEXT.intro.body[props.lang]}
                </IntroBody>
            </AnimatedContent>
            <IntroAnimatedLinks
                pose={socialVisible ? 'visible' : 'hidden'}>
                <SocialLinks/>
            </IntroAnimatedLinks>
            <IntroAnimatedButton
                pose={socialVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={WEBSITE_TEXT.intro.cta[props.lang][ctaIndex].message}
                    path={WEBSITE_TEXT.intro.cta[props.lang][ctaIndex].path}
                />
            </IntroAnimatedButton>
            <Waypoint
                onEnter={showSocial}
            />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={false}
                    books={true}
                    pubs={true}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
            <Waypoint
                onEnter={showSocial}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));