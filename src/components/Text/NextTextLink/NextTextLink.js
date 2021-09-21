import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setPageReload} from '../../../actions';
import {NextTextWrapper, UpNext, NextTextLine} from '../../../styles/text';
import {TEXTS, WEBSITE_TEXT_TEXTS} from './../../../data/constants';

const NextTextLink = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        //scroll up for better transition
        window.scrollTo(0, 800);

        //change page reload redux state
        props.setPageReload(true);
    };

    return (
        <Link
            to={'/texts/' + props.textName}
            onClick={reloadPage}>
            <NextTextWrapper>
                <NextTextLine/>
                <UpNext>
                    <div>
                        <em>
                            {WEBSITE_TEXT_TEXTS.text.nextText[props.lang]}
                            {TEXTS[props.lang][props.textName].title}
                        </em>
                    </div>
                </UpNext>
                <NextTextLine/>
            </NextTextWrapper>
        </Link>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(NextTextLink);