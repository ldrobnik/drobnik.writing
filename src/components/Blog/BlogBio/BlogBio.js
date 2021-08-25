import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPageReload} from '../../../actions';
import {BlogBioWrapper} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';

const BlogBio = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    return (
        <BlogBioWrapper>
            <Link to={'/'} onClick={reloadPage}>{WEBSITE_TEXT.blog.bio.links[0]}</Link> {WEBSITE_TEXT.blog.bio.content}
            <Link to={'/'} onClick={reloadPage}>{WEBSITE_TEXT.blog.bio.links[1]}</Link>.
        </BlogBioWrapper>
    );

};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageReload
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(BlogBio);