import axios from "axios";

/* interface IGetEntireMoutainInfoParams {
    mountainName: string;
    mountainHeight: number;
    mountainAddress: string;
    numOfRows: number;
} */

export interface IGetReturnItem {
    crcmrsghtnginfodscrt: string; // 주변관광정보
    hkngpntdscrt: string; // 산행포인트설명
    hndfmsmtnslctnrson: string; // 100 대 명산 선정이유
    hndfmsmtnmapimageseq: string // 지도이미지
    mntninfodtlinfocont: string; // 상세정보
    mntnattchimageseq: string; // 산이미지
    mntninfomapdnldfilenm: string; // 지도이미지 다운로드
    mntnnm: string; // 산이름
    mntninfopoflc: string; // 소재지
    mntninfohght: number; // 산높이
    pbtrninfodscrt: string; // 대중교통정보
    ptmntrcmmncoursdscrt: string; // 대중교통정보(상세)
}

export interface IGetEntireMountainInfo {
    header: {
        resultCode: string;
        resultMsg: string;
    },
    body: {
        items: IGetReturnItem[];
        numOfRows: number;
        pageNo: number;
        totalCount: number;
    }
}

export const getEntireMountainInfo = async(mountainName:string, mountainHeight:string, mountainAddress:string) => {
    const url = 'http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice'; /*URL*/
    const Servicekey = "8UiaBNpE5tqr0WoaK%2F0Thp%2BVKlwHXips4PcGEExDxfPHInqobykkMNfkxrp0jq8XtPsNi%2BkCRSWwjoWawQLV8Q%3D%3D";
    const numOfRows = 100;
    let queryString = "";
    queryString += mountainName ? `mntnNm=${mountainName}&` : "";
    queryString += mountainHeight ? `mntninfohght=${mountainHeight}&` : "";
    queryString += mountainAddress ? `mntninfopoflc=${mountainAddress}&` : "";
    queryString += `numOfRows=${numOfRows}`;
    const response = await axios(`${url}?serviceKey=${Servicekey}&${queryString}`,{
        method: "GET",
    });
   
    return response.data?.response?.body?.items?.item;
}