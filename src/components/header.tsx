import styled from "styled-components";
import { FlexHorizonCenter } from "../common/style";
import mountainImage from "../images/mountain.jpg";

const Wrapper = styled(FlexHorizonCenter)`
    height: 200px;
    background: linear-gradient( rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0)), url(${mountainImage});
    background-position: 85% 60%;
    box-shadow: 2px 3px 5px 0px;
`
const Title = styled.h1`
    font-family: 'Nanum Brush Script', cursive;
    font-size: 3em;
    font-weight: bold;
    
`

function Header() {
    return(
        <Wrapper>
            <Title>오늘의 등산</Title>
        </Wrapper>
    )
}

export default Header;