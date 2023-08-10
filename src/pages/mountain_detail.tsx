import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { FlexHorizonCenter, FlexVertical } from "../common/style";
import { IGetReturnItem } from "../api";

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
`

function MountainDetail() {
    const location = useLocation();
    const { info } : { info: IGetReturnItem } = location.state;
    useEffect(()=>{
        const test = document.getElementById("test");
        test!.innerHTML = info?.mntninfodtlinfocont;
    })
    return (
        <Wrapper>
            <Summary>
                <Image src={info.hndfmsmtnmapimageseq} alt="상세이미지가 존재하지 않습니다."/>
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
                                <a href={info?.mntninfomapdnldfilenm}>다운로드</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Summary>
            <div>
                <span id="test"></span>
            </div>
        </Wrapper>
    )
}

export default MountainDetail;