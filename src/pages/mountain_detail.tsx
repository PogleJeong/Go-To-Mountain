import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { FlexHorizonCenter, FlexVertical, FlexVerticalCenter } from "../common/style";
import { IGetReturnItem } from "../api";
import { txtChange } from "../common/function";

const Wrapper = styled(FlexVertical)`
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
`

const Summary = styled(FlexHorizonCenter)`
    margin-top: 75px;
    margin-bottom: 75px;
    padding: 30px;
    border-radius: 15px;
    border: 2px solid black;
`

const Image = styled.img`
    min-width: 250px;
    min-height: 250px;
    margin-right: 30px;
`

const Table = styled.table`
    width: 100%;
    tr {
        &:first-child {
            border-top: 3px solid black;
        }
        &:last-child {
            border-bottom: 3px solid black;
        }
        th {
            height: 50px;
            font-weight: bold;
            vertical-align: middle;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
        }
        td {
            padding-left: 30px;
            height: 50px;
            vertical-align: middle;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-collapse: collapse;
        }
    }
    a {
        color: green;
        svg {
            width: 20px;
            height: 20px;
        }
    }
`

const ContentContainer = styled(FlexVertical)`
`

const DetailContainer = styled(FlexVerticalCenter)`
    margin-top: 20px;
    margin-bottom: 100px;
    padding: 20px;
    h2 {
        padding-left: 7px;
        padding-right: 7px;
        padding-bottom: 5px;
        margin-bottom: 50px;
        border-bottom: 7px double black;
        font-size: 1.5em;
        font-weight: bold;
    }
    span {
        min-height: 100px;
        line-height: 180%;
        font-size: 1em;
    }
    /*  border-radius: 15px;
     border-left: 3px solid black;
     border-right: 3px solid black; */
`

const PublicTransportContainer = styled(FlexVerticalCenter)`
    margin-top: 20px;
    h2 {
        padding-left: 7px;
        padding-right: 7px;
        padding-bottom: 5px;
        border-bottom: 7px double black;
        margin-bottom: 50px;
        font-size: 1.5em;
        font-weight: bold;
    }
    span {
        padding: 20px;
        min-height: 100px;
        line-height: 180%;
        font-size: 1em;
    }
    /*  border-left: 3px solid black;
     border-right: 3px solid black;
     border-radius: 15px; */
`

function MountainDetail() {
    const location = useLocation();
    const { info } : { info: IGetReturnItem } = location.state;
    useEffect(()=>{
        const detailSpan = document.getElementById("mntninfodtlinfocont");
        detailSpan!.innerText = txtChange(info?.mntninfodtlinfocont || "");
    })s
    return (
        <Wrapper>
            <Summary>
                <Image src={info.mntnattchimageseq} alt="상세이미지가 존재하지 않습니다."/>
                <Table>
                    <tbody>
                        <tr>
                            <th>산이름</th>
                            <td>{info?.mntnnm}</td>
                        </tr>
                        <tr>
                            <th>높이</th>
                            <td>{info?.mntninfohght}m</td>
                        </tr>
                        <tr>
                            <th>산소재지</th>
                            <td>{info?.mntninfopoflc}</td>
                        </tr>
                        <tr>
                            <th>파일</th>
                            <td>
                                {info?.mntninfomapdnldfilenm ?
                                <a download="file.png" href={info?.mntninfomapdnldfilenm} target="_self" >
                                    <span>지도이미지</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-earmark-richtext" viewBox="0 0 16 16">
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                        <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
                                    </svg>
                                </a>
                                :
                                <span>-</span>
                                }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Summary>
            <ContentContainer>
                <DetailContainer>
                    <h2>상세정보</h2>
                    <span id="mntninfodtlinfocont"></span>
                </DetailContainer>
                <PublicTransportContainer>
                    <h2>대중교통</h2>
                    <span>{info?.pbtrninfodscrt === "  " || "== 정보가 존재하지 않습니다 =="}</span>
                </PublicTransportContainer>
            </ContentContainer>
        </Wrapper>
    )
}

export default MountainDetail;