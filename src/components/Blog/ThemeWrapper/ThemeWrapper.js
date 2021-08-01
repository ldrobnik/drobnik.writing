import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NocturineTheme, VostokTheme, TechTheme} from '../../../styled';

const ThemeWrapper = (props) => {

    //Don't style text if the black and white mode is on
    //Add appropriate styling to blog posts of different categories
    if (props.bwMode) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    } else if (props.theme === 'nocturine') {
        return (
            <NocturineTheme>
                {props.children}
            </NocturineTheme>
        );
    } else if (props.theme === 'vostok') {
        return (
            <VostokTheme>
                {props.children}
            </VostokTheme>
        );
    } else if (props.theme === 'tech') {
        return (
            <TechTheme>
                {props.children}
            </TechTheme>
        );
    } else {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }

};

const mapStateToProps = state => {
        return {
            bwMode: state.blackAndWhite
        };
    }
;

export default connect(mapStateToProps)(ThemeWrapper);