import { useRef } from "react";
import styled from "styled-components";
import { FlexHorizonCenter } from "../common/style";
import SearchResult from "../components/search-result";

const Wrapper = styled.div`
    width: 100%;
    height: 1200px;
    padding-left: 50px;
    padding-right: 50px;
`

const Title = styled(FlexHorizonCenter)`
    font-size: 2em;
    font-weight: bold;
    height: 50px;
    margin: 20px;
`

const SearchBox = styled(FlexHorizonCenter)`
    width: 100%;
    height: 200px;
    margin-bottom: 100px;
    border-radius: 15px;
    background-color: aliceblue;
`

function MountainList() {
    const keyword = useRef<HTMLInputElement>(null);
    return(
        <Wrapper>
            <Title as="h1">전국 산 찾기</Title> 
            <SearchBox>
                <form action="">
                    <input ref={keyword} name="mntnNm" type="text" placeholder="검색" required />
                    {/* <select name="option" id="mountain_search">
                        <option value="">--선택해주세요--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> */}
                    <button>제출</button>
                </form>
            </SearchBox>
            <SearchResult />
        </Wrapper>
    )
}

export default MountainList;