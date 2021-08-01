import React from 'react';
import {NocturineTheme, VostokTheme, TechTheme} from '../../../styled';

const ThemeWrapper = (props) => {

    if (props.theme === 'nocturine') {
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
            <NocturineTheme>
                {props.children}
            </NocturineTheme>
        );
    } else {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }

};

export default Layout;