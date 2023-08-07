import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { FlexHorizon } from "../common/style";
import Navigation from "./navigation";

const Wrapper = styled(FlexHorizon)`
    height: 1600px;
`

function Body() {
    return(
        <Wrapper>
            <Navigation />
            <Outlet />
        </Wrapper>
    )
}

export default Body;