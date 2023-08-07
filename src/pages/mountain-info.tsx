import { useQuery } from "react-query";
import styled from "styled-components";
import { IGetReturnItem, getEntireMountainInfo } from "../api";
import { FlexHorizonCenter, FlexVerticalCenter, FlexVerticalTopCenter } from "../common/style";

const Wrapper = styled.div`
    padding: 25px;
    width: 100%;
    height: 1200px;
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
    background-color: aliceblue;
`

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 40px;
    height: 1200px;
`

const ItemBox = styled(FlexVerticalTopCenter)`
    box-shadow: 2px 3px 5px 0px;
    border: 1px solid black;
    background-color: antiquewhite;

    h1 {
        font-size: 1.2em;
        font-weight: bold;
    }
    img {
        width: 80%;
        height: 50%;
        border-radius: 5px;
    }
   
`

function MountainInfo() {
    const { data, isLoading } = useQuery<IGetReturnItem[]>(["mountain", "entire","info"], getEntireMountainInfo);
    console.log(data);
    console.log(isLoading);
    return(
        <Wrapper>
            <Title as="h1">전국 산 찾기</Title>
            <SearchBox>

            </SearchBox>
            {
            isLoading ? 
            null
            :
            <GridBox>
            {data?.map((item, index)=>(
                <ItemBox key={index}>
                    <h1>{item.mntnnm}</h1>
                    {item.mntnattchimageseq ?
                    <img src={item.mntnattchimageseq} />
                    :
                    null
                    }
                </ItemBox>
            ))}
            </GridBox>
            }
        </Wrapper>
    )
}

export default MountainInfo;