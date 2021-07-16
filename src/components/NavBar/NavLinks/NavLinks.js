import React from 'react';
import {connect} from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {NavLinksWrapper} from '../../../styled';
import {AnimatedContent} from '../../../posed';
import {WEBSITE_TEXT} from './../../../data/constants';

const NavLinks = (props) => {

    //array containing all section link data
    const sectionLinks = WEBSITE_TEXT.sectionLinks;

    return (
        <NavLinksWrapper>
            {sectionLinks.map((link, k) => {
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
                }
            )}
        </NavLinksWrapper>

    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
    };
};

export default connect(mapStateToProps)(NavLinks);