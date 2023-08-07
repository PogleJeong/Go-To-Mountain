import styled from "styled-components";
import { useState } from "react";

import { FlexHorizonCenter, FlexVerticalCenter, FlexVerticalTopCenter } from "../common/style";

const Wrapper = styled.div`
    position: relative;
    margin-top: 3px;
    padding-top: 75px;
    box-shadow: 2px 3px 5px 0px;
    background-color: beige;
`

const Navi = styled(FlexVerticalTopCenter)`
    width: 200px;
    nav {
        width: 100%;
        h1 {
            text-align: center;
            font-size: 1.2em;
            font-weight: bold;
            padding: 10px 0px;
            margin-bottom: 40px;
        }
    }
    ul {
        width: 100%;
    }
`

const MainMenu = styled(FlexVerticalCenter)`
    border-top: 2px solid black;
    cursor: pointer;
    &:last-child {
        border-bottom: 2px solid black;
    }
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        box-shadow: 1px 2px 2px 0px;
        &:hover {
            background-color: aliceblue;
        }
    }
    ul {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const SubMenu = styled(FlexHorizonCenter)`
    height: 40px;
`

const ToggleBtn = styled.button`
    position: absolute;
    top: 1px;
    right: -41px;
    width: 40px;
    height: 40px;
    border: none;
    box-shadow: 1px 2px 3px 0px;
    cursor: pointer;
    transition: border 1s;
    &:hover {
        border: 1px solid black;
    }
    svg {
        width: 20px;
        height: 20px;
    }
`

function Navigation() {
    const [ open, setOpen ] = useState(true);
    const toggleNaviBar = () => {
        setOpen((prev)=>!prev);
    }
    const toggleSubMenu = (event:any) => {
        const { display } = event.currentTarget.lastChild.style;

        if (display === "" || display === "none") {
            event.currentTarget.style.zIndex = 50;
            event.currentTarget.firstChild.style.backgroundColor = "aliceblue";
            event.currentTarget.lastChild.style.display = "flex";
        }
        else {
            event.currentTarget.style.zIndex = 0;
            event.currentTarget.firstChild.style.backgroundColor = "beige";
            event.currentTarget.lastChild.style.display = "none";
        }
    }
    return(
        <Wrapper>
            {
            open ?
            <Navi>
                <nav>
                    <h1>Service</h1>
                    <ul>
                        <MainMenu onClick={toggleSubMenu}>
                            <span>메뉴1</span>
                            <ul>
                                <SubMenu>- 서브메뉴1</SubMenu>
                                <SubMenu>- 서브메뉴2</SubMenu>
                                <SubMenu>- 서브메뉴3</SubMenu>
                            </ul>
                        </MainMenu>
                        <MainMenu onClick={toggleSubMenu}>
                            <span>메뉴2</span>
                            <ul>
                                <SubMenu>- 서브메뉴1</SubMenu>
                                <SubMenu>- 서브메뉴2</SubMenu>
                                <SubMenu>- 서브메뉴3</SubMenu>
                            </ul>
                        </MainMenu>
                        <MainMenu onClick={toggleSubMenu}>
                            <span>메뉴3</span>
                            <ul>
                                <SubMenu>- 서브메뉴1</SubMenu>
                                <SubMenu>- 서브메뉴2</SubMenu>
                                <SubMenu>- 서브메뉴3</SubMenu>
                            </ul>
                        </MainMenu>
                    </ul>
                </nav>
            </Navi>
            :
            null
            }
            {
            open ?
            <ToggleBtn onClick={toggleNaviBar}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
            </ToggleBtn>
            :
            <ToggleBtn onClick={toggleNaviBar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </ToggleBtn>
            }
        </Wrapper>
    )
}

export default Navigation;