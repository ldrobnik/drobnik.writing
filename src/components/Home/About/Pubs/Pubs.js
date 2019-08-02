import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {WEBSITE_TEXT} from '../../../../data/constants';

import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import ToggleSwitch from '../../../UI/ToggleSwitch/ToggleSwitch';
import PubList from './PubList/PubList';


const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.p`
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
`;

const SwitchPanel = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;

`;

const SwitchWrapper = styled.div`
  display: flex;
  margin: 0.5em;
`;


const Label = styled.span`
  padding: 0.1em;
`;

const SubsectionHeading = styled.h1`
  font-size: ${props => props.theme.subtitleSize};
  margin-top: 1em;
`;

const Pubs = (props) => {

    //specifies whether texts in English should be displayed
    const [en, setEn] = useState(true);

    //specifies whether texts in Polish should be displayed
    const [pl, setPl] = useState(true);

    //toggles the display of English pubs and if both en and pl are false, sets pl to true
    const setEnHandler = () => {
        setEn(!en);
        if (en && !pl) setPl(true);
    };

    //toggles the display of Polish pubs and if both en and pl are false, sets en to true
    const setPlHandler = () => {
        setPl(!pl);
        if (!en && pl) setEn(true);
    };

    return (
        <Wrapper>
            <SectionHeading
                title={WEBSITE_TEXT.publications.title[props.lang]}
                subtitle=""
            />
            <Message>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].label}</Message>
            <SwitchPanel>
                <label>
                    <SwitchWrapper>
                        <ToggleSwitch
                            checked={en}
                            onChange={setEnHandler}
                        />
                        <Label>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].english}</Label>
                    </SwitchWrapper>
                </label>
                <label>
                    <SwitchWrapper>
                        <ToggleSwitch
                            checked={pl}
                            onChange={setPlHandler}
                        />
                        <Label>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].polish}</Label>
                    </SwitchWrapper>
                </label>
            </SwitchPanel>
            <SubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].books}</SubsectionHeading>
            <PubList
                en={en}
                pl={pl}
                type="books"/>
            <SubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].press}</SubsectionHeading>
            <PubList
                en={en}
                pl={pl}
                type="press"/>
            <SubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].collections}</SubsectionHeading>
            <PubList
                en={en}
                pl={pl}
                type="collections"/>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Pubs);