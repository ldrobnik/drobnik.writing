import React from 'react';
import {SocialLinksWrapper} from '../../../styles/about';
import {WEBSITE_TEXT_ABOUT} from './../../../data/constants';

const SocialLinks = () => {

    return (
        <SocialLinksWrapper>
            {WEBSITE_TEXT_ABOUT.intro.social.map((link, k) => {
                    return (
                        <a key={k} href={link.url} target="_blank"
                           rel="noopener noreferrer">{link.name}</a>
                    )
                }
            )}
        </SocialLinksWrapper>
    );
};

export default SocialLinks;