import React from 'react';
import {connect} from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';
import {NavLinksWrapper} from '../../../styled';
import {AnimatedContent} from '../../../posed';
import {WEBSITE_TEXT} from './../../../data/constants';
import {bindActionCreators} from 'redux';
import {setPageReload} from '../../../actions';

const NavLinks = (props) => {

    //array containing all section link data
    const sectionLinks = WEBSITE_TEXT.sectionLinks;


    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //content of the blog link; don't show if the language is set to Polish
    const blogLink = (props.lang === 'en') ?
        <Link to={'blog'} onClick={reloadPage}>{sectionLinks[sectionLinks.length - 1].text[props.lang]}</Link>
        : null;


    return (
        <NavLinksWrapper>
            {sectionLinks.map((link, k) => {
                    if (sectionLinks[k].id !== 'blog') {
                        return (
                            <AnimatedContent
                                key={k}
                                pose={!props.reload ? 'visible' : 'hidden'}>
                                <div>
                                    <AnchorLink href={`#${sectionLinks[k].id}`}
                                                offset="60px">{sectionLinks[k].text[props.lang]}</AnchorLink>
                                </div>
                            </AnimatedContent>
                        );
                    } else {
                        return (
                            <AnimatedContent
                                key={k}
                                pose={!props.reload ? 'visible' : 'hidden'}>
                                <div>
                                    {blogLink}
                                </div>
                            </AnimatedContent>
                        );
                    }
                }
            )}
        </NavLinksWrapper>
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
    return bindActionCreators({
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);