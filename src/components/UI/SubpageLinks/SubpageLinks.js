import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';
import {SubLinks} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';


const SubpageLinks = props => {
    //The Back to Top link
    const top = <AnchorLink href='#top'>{WEBSITE_TEXT.text.top[props.lang]}</AnchorLink>;

    //The main Blog page link; show only if the blog prop is set to true
    const blog = props.blog ? <Link
        to={'/blog'}
        onClick={props.reloadPage}
    >{WEBSITE_TEXT.blog.blog}</Link> : null;

    //The Home link
    const home = <Link
        to={'/'}
        onClick={props.reloadPage}
    >{WEBSITE_TEXT.text.home[props.lang]}</Link>;

    return (
        <SubLinks>
            <div>{top}</div>
            <div>{blog}</div>
            <div>{home}</div>
        </SubLinks>
    );
};


export default SubpageLinks;
