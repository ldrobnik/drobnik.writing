import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPageReload} from '../../../actions';
import {WritingBioWrapper} from '../../../styles/writing';
import {WEBSITE_TEXT} from '../../../data/constants';

const WritingBio = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    return (
        <WritingBioWrapper>
            <Link to={'/'} onClick={reloadPage}>{WEBSITE_TEXT.writing.bio[props.lang].links[0]}</Link> {WEBSITE_TEXT.writing.bio[props.lang].content}
            <Link to={'/'} onClick={reloadPage}>{WEBSITE_TEXT.writing.bio[props.lang].links[1]}</Link>.
        </WritingBioWrapper>
    );

};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageReload
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(WritingBio);