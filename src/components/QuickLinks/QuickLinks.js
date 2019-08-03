import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {LINKS} from "../../data/constants";
import QuickLink from "./QuickLink/QuickLink";

const Wrapper = styled.div`

`;

const QuickLinks = (props) => {

    return (
        <Wrapper>
            {LINKS.map((link, k) => {
                return (
                    <QuickLink
                        title={link.title}
                        subtitle={link.subtitle}
                        url={link.url}
                        key={k}/>
                )
            })}
        </Wrapper>
    );
};

export default QuickLinks;
