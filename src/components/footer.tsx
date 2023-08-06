import React from "react";
import styled from "styled-components";
import { FlexHorizonCenter } from "../common/style";

const Wrapper = styled(FlexHorizonCenter)`
    height: 40px;
    font-size: 0.7em;
    font-weight: bold;
    transition: color 1s, background-color 1s;
`

function Footer() {
    const year = new Date().getFullYear();
    return(
        <Wrapper>
            Copyright © {year}, Jeong Eunseong All rights reserved
        </Wrapper>
    )
}

export default React.memo(Footer);