import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NocturineTheme, VostokTheme, WritingTheme, CodeTheme, BiologyTheme, PopTheme} from '../../../styled';

const ThemeWrapper = (props) => {

    //Don't style text if the black and white mode is on
    //Add appropriate styling to blog posts of different categories


    if (props.bwMode) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    } else {
        switch (props.theme) {
            case 'nocturine':
                return (
                    <NocturineTheme>
                        {props.children}
                    </NocturineTheme>
                );
            case 'vostok':
                return (
                    <VostokTheme>
                        {props.children}
                    </VostokTheme>
                );
            case 'writing':
                return (
                    <WritingTheme>
                        {props.children}
                    </WritingTheme>
                );
            case 'code':
                return (
                    <CodeTheme>
                        {props.children}
                    </CodeTheme>
                );
            case 'biology':
                return (
                    <BiologyTheme>
                        {props.children}
                    </BiologyTheme>
                );
            case 'pop':
                return (
                    <PopTheme>
                        {props.children}
                    </PopTheme>
                );
            default:
                return (
                    <React.Fragment>
                        {props.children}
                    </React.Fragment>
                );
        }
    }
};

const mapStateToProps = state => {
        return {
            bwMode: state.blackAndWhite
        };
    }
;

export default connect(mapStateToProps)(ThemeWrapper);