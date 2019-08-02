import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Switch from "react-switch";
import { WEBSITE_TEXT } from '../../../../data/constants';

import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import ToggleSwitch from '../../../UI/ToggleSwitch/ToggleSwitch';
import PubList from './PubList/PubList';



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
        <React.Fragment>
            <SectionHeading
                title={WEBSITE_TEXT.publications.title[props.lang]}
                subtitle=""
            />
            <p>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].label}</p>
            <label>
                <ToggleSwitch
                    checked={en}
                    onChange={setEnHandler}
                />
                <span>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].english}</span>

            </label>
            <label>
                <ToggleSwitch
                    checked={pl}
                    onChange={setPlHandler}
                />
                <span>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].polish}</span>
            </label>
            <h3>{WEBSITE_TEXT.publications.headlines[props.lang].books}</h3>
                <PubList
                    en={en}
                    pl={pl}
                    type="books"/>
            <h3>{WEBSITE_TEXT.publications.headlines[props.lang].press}</h3>
            <PubList
                en={en}
                pl={pl}
                type="press"/>
            <h3>{WEBSITE_TEXT.publications.headlines[props.lang].collections}</h3>
            <PubList
                en={en}
                pl={pl}
                type="collections"/>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Pubs);