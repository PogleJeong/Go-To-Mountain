
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { IGetReturnItem, getEntireMountainInfo } from "../api";
import { FlexHorizonCenter, FlexVerticalTopCenter } from "../common/style";
import { Link, useSearchParams } from "react-router-dom";
import { range } from "../common/function";

const Wrapper = styled(FlexVerticalTopCenter)`
   position: relative;
   height: 100%;
`

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
    height: 1000px;
    max-height: 1000px;
    a {
        text-decoration: none;
    }
`

const ItemBox = styled(FlexVerticalTopCenter)`
    box-shadow: 2px 3px 5px 0px;
    padding: 10px;
    border: 1px solid black;
    background-color: antiquewhite;
    min-height: 300px;
    max-height: 300px;
    h1 {
        font-size: 1em;
        font-weight: bold;
        padding: 20px;
    }
    img, svg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
        border-radius: 5px;
    }
    span {
        font-size: 0.8em;
        width: 100%;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        line-height: 160%;
    }
`

const IndexBox = styled(FlexHorizonCenter)`
    position: absolute;
    bottom: 20px;
    margin: 50px 0px;
    width: 100%;
`

const IndexBtn = styled(FlexHorizonCenter)<{active?: boolean}>`
    font-size: 1.2em;
    font-weight: bold;
    padding: 10px;
    border: 2px solid white;
    background-color: ${(props) => props.active ? "beige": "white"};
    cursor: pointer;
    &:hover {
        border: 2px solid black;
    }
    
`

/* interface IQueryParams {
    mountainName: string | "",
    mountainHeigh: string | "",
    mountainAddress: string | "",
}
 */

function SearchResult() {
    const [ searchParams ] = useSearchParams();
    const [ pageIndex, setPageIndex ]  = useState(0); 
    const { data, isLoading } = useQuery<IGetReturnItem[]>(["mountain", searchParams.toString(),"info"], ()=>
        getEntireMountainInfo(
            searchParams.get("mntnNm") || "", 
            searchParams.get("mntninfohght") || "", 
            searchParams.get("mntninfopoflc")|| "",
        )
    );
    const handleImageError = (event: any) => {
        event.target.src = "";
    }
    console.log(data);
    return(
        <Wrapper>
            {
            isLoading ? 
            null
            :
         
            <GridBox>
            {data?.slice(pageIndex * 15, pageIndex * 15 + 15).map((item, index)=>(
                <Link to={`/mountain-detail/${item.mntnnm}`} state={{info:item}} >
                    <ItemBox key={index}>
                        <h1>{item.mntnnm}</h1>
                        {item.mntnattchimageseq ?
                        <img src={item.mntnattchimageseq} alt="해당이미지를 찾을 수 없습니다." onError={handleImageError} />
                        :
                        null
                        }
                        {item.mntninfopoflc ? 
                        <span>{item.mntninfopoflc}</span>
                        :
                        <span>장소정보가 없습니다.</span>
                        }
                    </ItemBox>
                </Link>
            ))}
            </GridBox>
            }
            <IndexBox>
            {
                range(Math.floor(data?.length! / 15)).map((page, index)=>(
                    <IndexBtn active={page===pageIndex ? true: false} onClick={()=>setPageIndex(page)} key={index}>{page+1}</IndexBtn>
                ))
            }
            </IndexBox>
        </Wrapper>
    )
}

export default React.memo(SearchResult);