import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {SectionLinksWrapper} from '../../../styled';
import {WEBSITE_TEXT} from './../../../data/constants';


const SectionLinks = props => {

    //array containing all section link data
    const sectionLinks = WEBSITE_TEXT.sectionLinks;

    //array containing links that need to be displayed
    let linksToDisplay = [];

    //variables to be used in the loop, holding the id and text of a given link
    let linkId; //id of the link
    let linkPath; //the href value (# + linkId)
    let linkText; //text to be displayed

    //loops through the sectionLinks array and adds an anchor link for each props that is true
    for (let i = 0; i < sectionLinks.length; i++) {
        linkId = sectionLinks[i].id;
        linkPath = '#' + linkId;
        linkText = sectionLinks[i].text[props.lang];
        if (props[linkId]) {
            linksToDisplay.push(
                <AnchorLink href={linkPath} offset="60px">{linkText}</AnchorLink>
            );
        }
    }

    return (
        <SectionLinksWrapper>
            {linksToDisplay.map((link, k) => {
                    return (<div key={k}>
                            {link}
                        </div>
                    )
                }
            )}
        </SectionLinksWrapper>
    );
};

export default SectionLinks;