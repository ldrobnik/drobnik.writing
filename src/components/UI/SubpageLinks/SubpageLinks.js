import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';
import {SubLinks} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';


const SubpageLinks = props => {
    //The Back to Top link
    const top = <AnchorLink href='#top'>{WEBSITE_TEXT.text.top[props.lang]}</AnchorLink>;

//The Home link
    const home = <Link
        to={'/'}
        onClick={props.reloadPage}
    >{WEBSITE_TEXT.text.home[props.lang]}</Link>;

    return (
        <SubLinks>
            <div>{top}</div>
            <div>{home}</div>
        </SubLinks>
    );
};


export default SubpageLinks;
