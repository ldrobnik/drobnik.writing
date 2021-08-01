import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {QuickLinkWrapper, QuickLinkContentWrapper, QuickLinkTitle, QuickLinkSubtitle} from '../../../styled';
import {setPageReload} from '../../../actions';

const QuickLink = (props) => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //constant holding the button content
    const linkTitle = props.title;
    const linkSubtitle = props.subtitle;
    const linkUrl = props.url;

    //variable holding the button content wrapped in a QuickLink or a element
    let workingLink;

    //the content of the link
    const linkContent = (
        <QuickLinkContentWrapper>
            <QuickLinkTitle>
                {linkTitle}
            </QuickLinkTitle>
            <QuickLinkSubtitle>
                {linkSubtitle}
            </QuickLinkSubtitle>
        </QuickLinkContentWrapper>
    );

    //Display a Link or a element depending on the url type
    if (linkUrl[0] === '/') {
        workingLink = (

            <Link
                to={linkUrl}
                onClick={reloadPage}
            >
                {linkContent}
            </Link>);

    } else {
        workingLink = (

            <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer">
                {linkContent}
            </a>
        );
    }

    return (
        <QuickLinkWrapper>
            {workingLink}
        </QuickLinkWrapper>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(QuickLink);