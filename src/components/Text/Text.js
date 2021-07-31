import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {
    setTheme,
    setCurrentText,
    setNavbarVisibility,
    setDataNoticeVisible,
    setPage,
    setPageReload
} from '../../actions';
import {TextTopAnchor, TextWrapper, TextHeader, TextTitle, TextSubtitle, TextBody} from '../../styled';
import {AnimatedContent, AnimatedTextLink, AnimatedTextButton} from '../../posed';
import {BOOKS, BOOK_LIST, TEXTS, TEXT_NAMES, FADE_DURATION} from './../../data/constants';
import Credits from './Credits/Credits';
import DescriptionPanel from './DescriptionPanel/DescriptionPanel';
import NextTextLink from './NextTextLink/NextTextLink';
import SectionSeparator from '../UI/SectionSeparator/SectionSeparator';
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';
import CentredButton from '../UI/CentredButton/CentredButton';

export const Text = (props) => {

        //specifies whether 'up next' link should be displayed
        const [linkVisible, setlinkVisible] = useState(false);

        //specifies whether the preorder button should be visible
        const [preorderBtnVisible, setPreorderBtnVisible] = useState(false);

        //shows the content
        const showContent = () => {
            props.setPageReload(false);
        };

        //shows the preorder button
        const showPreorderBtn = () => {
            setPreorderBtnVisible(true);
        };

        //shows the 'up next' link
        const showLink = () => {
            setlinkVisible(true);
        };

        //hides the 'up next' link
        const hideLink = () => {
            setlinkVisible(false);
        };

        //sets off page reloading animation
        const reloadPage = () => {
            props.setPageReload(true);
        };

        //Checks if the id in the current url matches any text; if not, returns 'nocturine'
        const checkTextID = (name) => {

            for (let i = 0; i < TEXT_NAMES.length; i++) {
                if (TEXT_NAMES[i] === name) return name;
            }

            //if unknown id, display 'nocturine'
            return 'nocturine';
        };

        //constant holding the name of the text to be displayed
        const textName = checkTextID(props.match.params.id);

        //the index of the text
        const textIndex = TEXT_NAMES.indexOf(textName);

        //The next text to be displayed;
        const nextTextId = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;


        //The next text name
        const nextTextName = TEXT_NAMES[nextTextId];

        //updates the currently displayed text
        const updateText = () => {
            props.setCurrentText(textName);
        };

        //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
        const themeToUse = props.bwMode ? 'blackAndWhite' : TEXTS[props.lang][textName].theme;

        //updates current theme
        const updateTheme = () => {
            props.setTheme(themeToUse);
        };

        //shows the NavBar
        const showNavbar = () => {
            props.setNavbarVisibility(true);
        };

        //checks whether the data storage notice should be displayed and turns it on if it is invisible but hasn't been confirmed yet
        const checkDataNotice = () => {
            if (!props.noticeAccepted) {
                props.setDataNoticeVisible(true);
            }
        };

        //lets the Redux store know which page is currently displayed
        const setCurrentPage = (page) => {
            props.setPage(page);
        }

        useEffect(() => {
            //Update page title with the piece title
            document.title = `Łukasz Drobnik - ${TEXTS[props.lang][textName].title}`;

            //update the theme depending on the text displayed
            updateTheme();

            //update the currently displayed text
            updateText();

            //show Navbar
            showNavbar();

            //checks whether data storage notice should be visible and if so, turn is on
            checkDataNotice();

            //lets the Redux store know that the Text page is currently displayed
            setCurrentPage('text');

            //show content after a while if page has loaded
            if (props.loaded) {
                setTimeout(showContent, FADE_DURATION);
            }

        });

        //do not show the content until the page is loaded
        return props.loaded &&
            <TextWrapper>
                <TextTopAnchor>
                    <div id='top'></div>
                </TextTopAnchor>
                <AnimatedContent
                    pose={!props.reload ? 'visible' : 'hidden'}>
                    <TextHeader>
                        <TextTitle>
                            {TEXTS[props.lang][textName].title}
                        </TextTitle>
                        <TextSubtitle>
                            {TEXTS[props.lang][textName].subtitle}
                        </TextSubtitle>
                    </TextHeader>
                    <TextBody>
                        {TEXTS[props.lang][textName].content}
                    </TextBody>
                    <Waypoint
                        onEnter={hideLink}
                    />
                    <Credits
                        lang={props.lang}
                        textName={textName}/>
                </AnimatedContent>
                {BOOK_LIST.includes(textName) &&
                <React.Fragment>
                    <Waypoint
                        onEnter={showPreorderBtn}
                    />
                    <AnimatedTextButton
                        pose={preorderBtnVisible ? 'visible' : 'hidden'}>
                        <CentredButton
                            message={BOOKS[BOOK_LIST.indexOf(textName)].orderButton[props.lang]}
                            path={BOOKS[BOOK_LIST.indexOf(textName)].url}
                        />
                    </AnimatedTextButton>
                </React.Fragment>
                }
                <AnimatedContent
                    pose={!props.reload ? 'visible' : 'hidden'}>
                    <DescriptionPanel
                        description={TEXTS[props.lang][textName].description}
                        title={TEXTS[props.lang][textName].title}
                    />
                </AnimatedContent>
                <Waypoint
                    onEnter={showLink}
                />
                <AnimatedTextLink
                    pose={linkVisible ? 'visible' : 'hidden'}
                >
                    <NextTextLink
                        textName={nextTextName}
                        lang={props.lang}
                    />
                </AnimatedTextLink>
                <Waypoint
                    onEnter={showLink}
                />
                <AnimatedContent
                    pose={!props.reload ? 'visible' : 'hidden'}>
                    <SubpageLinks
                        lang={props.lang}
                        reloadPage={reloadPage}
                    />
                    <Waypoint
                        onEnter={showLink}
                    />
                    <SectionSeparator/>
                    <CopyrightNote/>
                    <Waypoint
                        onEnter={showLink}
                    />
                </AnimatedContent>
            </TextWrapper>;
    }
;

const mapStateToProps = state => {
        return {
            lang: state.language,
            bwMode: state.blackAndWhite,
            noticeVisible: state.dataNoticeVisible,
            noticeAccepted: state.dataNoticeAccepted,
            reload: state.pageReload,
            loaded: state.pageLoaded
        };
    }
;

const mapDispatchToProps = dispatch => {
        return bindActionCreators({
            setTheme,
            setCurrentText,
            setNavbarVisibility,
            setDataNoticeVisible,
            setPage,
            setPageReload
        }, dispatch);
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(Text);