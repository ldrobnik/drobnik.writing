import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setTheme, setNavbarVisibility, setDataNoticeVisible, setPageReload} from '../../actions';
import {FADE_DURATION} from '../../styles/shared';
import {QuickLinksWrapper} from '../../styled';
import {AnimatedContent} from '../../animations/shared';
import {LINKS, TEXT_NAMES} from '../../data/constants';
import QuickLink from './QuickLink/QuickLink';

const QuickLinks = props => {

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //updates current theme with a random theme
    const updateTheme = () => {
        //randomly selected theme
        const randomTheme = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

        //update Redux store with a new theme
        props.setTheme(randomTheme);
    };

    //hides the NavBar
    const hideNavbar = () => {
        props.setNavbarVisibility(false);
    };

    //turns of data storage notice
    const hideDataNotice = () => {
        props.setDataNoticeVisible(false)
    };

    useEffect(() => {

        //hide navbar
        hideNavbar();

        //Update page title
        document.title = `Łukasz Drobnik - quick links`;

        //change theme to a random one
        updateTheme();

        //Hide data storage notice
        hideDataNotice();

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    return (
        <AnimatedContent
            pose={!props.reload ? 'visible' : 'hidden'}>
            <QuickLinksWrapper>
                {LINKS.map((link, k) => {
                    return (
                        <QuickLink
                            title={link.title}
                            subtitle={link.subtitle}
                            url={link.url}
                            key={k}/>
                    )
                })}
            </QuickLinksWrapper>
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setTheme,
        setNavbarVisibility,
        setDataNoticeVisible,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
