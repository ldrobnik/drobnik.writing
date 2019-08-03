import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {LINKS} from "../../data/constants";
import Link from "./Link/Link";

const Wrapper = styled.div`

`;

const Links = (props) => {

    return (
        <Wrapper>
            {LINKS.map((link, k) => {
                return (
                    <Link
                        title={link.title}
                        subtitle={link.subtitle}
                        url={link.url}
                        key={k}/>
                )
            })}
        </Wrapper>
    );
};

export default Links;
