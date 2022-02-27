import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {setPageReload} from '../../../actions';
import {SectionSeparator, SmallSeparator, FADE_DURATION} from '../../../styles/shared';
import {BookBody, BookSlogan} from '../../../styles/about';
import {AnimatedContent} from '../../../animations/shared';
import {BookAnimatedButton} from '../../../animations/about';
import {EXCERPT_BUTTON, BOOKS} from './../../../data/constants';
import CentredPhoto from '../../UI/CentredPhoto/CentredPhoto';
import SectionHeading from '../../UI/SectionHeading/SectionHeading'
import QuoteList from '../QuoteList/QuoteList';
import CentredButton from '../../UI/CentredButton/CentredButton';
import SectionLinks from '../SectionLinks/SectionLinks';

export const Book = props => {

    //specifies whether the quotes should be displayed - triggered by scrolling to the Waypoint element
    const [quotesVisible, setQuotesVisible] = useState(false);

    //specifies whether the preorder button should be visible
    const [orderBtnVisible, setOrderBtnVisible] = useState(false);

    //specifies whether the excerpt button should be visible
    const [excerptBtnVisible, setExcerptBtnVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets preorder button visibility to true
    const showorderBtn = () => {
        setOrderBtnVisible(true);
    };


    //sets quote visibility to true
    const showQuotes = () => {
        setQuotesVisible(true);
    };

    //sets excerpt button visibility to true
    const showExcerptBtn = () => {
        setExcerptBtnVisible(true);
    };

    //sets quotes and button visibility to false
    const hideElements = () => {
        setQuotesVisible(false);
        setExcerptBtnVisible(false);
    };


    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    //whenever the pathname or language change
    useEffect(() => {

            //hide elements
            setTimeout(hideElements, 100);
        },
        [props.location.pathname, props.lang]
    );

    return (
        <React.Fragment>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={BOOKS[props.book].title[props.lang]}
                    subtitle=""
                />
                <SmallSeparator/>
                <CentredPhoto
                    src={BOOKS[props.book].cover}
                    alt='Book cover'
                    link={BOOKS[props.book].url}
                />
                <BookSlogan>
                    {BOOKS[props.book].slogan[props.lang]}
                </BookSlogan>
            </AnimatedContent>
            <Waypoint
                onEnter={showorderBtn}
            />
            <BookAnimatedButton
                pose={orderBtnVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={BOOKS[props.book].orderButton[props.lang]}
                    path={BOOKS[props.book].url}
                />
            </BookAnimatedButton>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <BookBody>
                    <div>
                        {BOOKS[props.book].body[props.lang]}
                    </div>
                    <div>
                        {BOOKS[props.book].orderDetails[props.lang]}
                    </div>
                </BookBody>
            </AnimatedContent>
            <Waypoint
                onEnter={showQuotes}
                bottomOffset="25%"
            />
            <QuoteList
                book={props.book}
                lang={props.lang}
                visible={quotesVisible}
            />
            <Waypoint
                onEnter={showExcerptBtn}
            />
            <BookAnimatedButton
                pose={excerptBtnVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={EXCERPT_BUTTON[props.lang]}
                    path={'/texts/' + BOOKS[props.book].id}
                />
            </BookAnimatedButton>
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showExcerptBtn}
            />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    books={false}
                    pubs={true}
                    read={true}
                />
                <Waypoint
                    onEnter={showQuotes}
                />
                <Waypoint
                    onEnter={showExcerptBtn}
                />
                <SectionSeparator/>
            </AnimatedContent>
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showExcerptBtn}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload,
        page: state.pageDisplayed
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book));