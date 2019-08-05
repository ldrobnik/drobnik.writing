import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {WEBSITE_TEXT} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import CentredButton from "../../../UI/CentredButton/CentredButton";
import SectionLinks from "../SectionLinks/SectionLinks";
import QuoteList from '../QuoteList/QuoteList';
import SectionSeparator from "../../../UI/SectionSeparator/SectionSeparator";

const Body = styled.div`
  text-align: left;
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  
    
    a {
      font-family: ${props => props.theme.sansSerif};
    }
`;

const Nocturine = (props) => {

    //specifies whether the quotes should be displayed - triggered by scrolling to the Waypoint element
    const [quotesVisible, setQuotesVisible] = useState(false);

    //sets quote visibility to true
    const showQuotes = () => {
      setQuotesVisible(true);
    };

    return (
        <React.Fragment>
            <SectionHeading
                title={WEBSITE_TEXT.nocturine.title[props.lang]}
                subtitle=""
            />
            <Body>
                {WEBSITE_TEXT.nocturine.body[props.lang]}
            </Body>
            <Waypoint
                onEnter={showQuotes}
            />
            <QuoteList
                lang={props.lang}
                visible={quotesVisible}
            />
            <CentredButton
                message={WEBSITE_TEXT.nocturine.button[props.lang].message}
                path={WEBSITE_TEXT.nocturine.button[props.lang].path}
                capital='m'/>
            <SectionLinks
                lang={props.lang}
                top={true}
                nocturine={false}
                pubs={false}
                read={true}
            />
            <SectionSeparator />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Nocturine);