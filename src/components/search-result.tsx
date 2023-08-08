
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { IGetReturnItem, getEntireMountainInfo } from "../api";
import { FlexHorizonCenter, FlexVerticalTopCenter } from "../common/style";
import { useParams, useSearchParams } from "react-router-dom";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
    max-height: 1000px;
`

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
    max-height: 1000px;
`

const ItemBox = styled(FlexVerticalTopCenter)`
    box-shadow: 2px 3px 5px 0px;
    border: 1px solid black;
    background-color: antiquewhite;
    max-height: 100%;
    h1 {
        font-size: 1.2em;
        font-weight: bold;
        padding: 20px;
    }
    img {
        width: 80%;
        height: 50%;
        border-radius: 5px;
    }
`

const IndexBox = styled(FlexHorizonCenter)`
    span {
        font-size: 1.2em;
        padding: 10px;
    }
`

interface IQueryParams {
    mountainName: string | "",
    mountainHeigh: string | "",
    mountainAddress: string | "",
}

function SearchResult() {
    const [ searchParams ] = useSearchParams();
    const [ pageIndex, setPageIndex ]  = useState(0); 
    const { data, isLoading } = useQuery<IGetReturnItem[]>(["mountain", "entire","info"], ()=>
        getEntireMountainInfo(
            searchParams.get("mntnNm") || "", 
            searchParams.get("mntninfohght") || "", 
            searchParams.get("mntninfopoflc")|| "",
        )
    );
    
    return(
        <Wrapper>
            {
            isLoading ? 
            null
            :
            data?.slice(pageIndex * 15, pageIndex * 15 + 15).map((item, index)=>(
                <ItemBox key={index}>
                    <h1>{item.mntnnm}</h1>
                    {item.mntnattchimageseq ?
                    <img src={item.mntnattchimageseq} alt="" />
                    :
                    null
                    }
                </ItemBox>
            ))
            }
            <IndexBox>
                
            </IndexBox>
        </Wrapper>
    )
}

export default SearchResult;