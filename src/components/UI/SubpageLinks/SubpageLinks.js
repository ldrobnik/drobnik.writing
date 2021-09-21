import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';
import {SubLinks} from '../../../styles/shared';
import {WEBSITE_TEXT_SHARED} from '../../../data/constants';


const SubpageLinks = props => {
    //The Back to Top link
    const top = <AnchorLink href='#top'>{WEBSITE_TEXT_SHARED.subpagelinks.top[props.lang]}</AnchorLink>;

    //Link to the main page - different for the blog and text sections
    const main = props.blog ? <Link
        to={'/blog'}
        onClick={props.reloadPage}
    >{WEBSITE_TEXT_SHARED.subpagelinks.allNotes}</Link> :
        <Link
            to={'/texts'}
            onClick={props.reloadPage}
        >{WEBSITE_TEXT_SHARED.subpagelinks.allTexts[props.lang]}</Link>;

    //The Home link
    const home = <Link
        to={'/'}
        onClick={props.reloadPage}
    >{WEBSITE_TEXT_SHARED.subpagelinks.home[props.lang]}</Link>;

    return (
        <SubLinks>
            <div>{top}</div>
            {!props.mainHidden && <div>{main}</div>}
            <div>{home}</div>
        </SubLinks>
    );
};


export default SubpageLinks;
