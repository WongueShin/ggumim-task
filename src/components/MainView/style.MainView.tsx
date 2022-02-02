import styled, { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SourceHanSerifKR-Regular';
        font-style: normal;
        font-weight: 400;
        src: local('source-han-serif-korean'),
        url("//cdn.ggumim.co.kr/font/SourceHanSerifKR-Regular.woff2") format('woff2'),
        url("//cdn.ggumim.co.kr/font/SourceHanSerifKR-Regular.woff") format('woff'),
        url("//cdn.ggumim.co.kr/font/SourceHanSerifKR-Regular.otf") format('truetype');
    }

    @font-face {
        font-family: 'SourceHanSerifKR-SemiBold';
        font-style: normal;
        font-weight: 600;
        src: local('source-han-serif-korean'),
        url("//cdn.ggumim.co.kr/font/SourceHanSerifKR-SemiBold.woff2") format('woff2'),
        url("//cdn.ggumim.co.kr/font/SourceHanSerifKR-SemiBold.woff") format('woff'),
        url("//cdn.ggumim.co.kr/font/SourceHanSerifKR-SemiBold.otf") format('truetype');
    }

    @font-face {
        font-family: 'Noto Sans KR Bold';
        font-style: normal;
        font-weight: 700;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');
    }
`

export const Main = styled.main`
    padding: 110px 0 0 0;
    box-sizing: border-box;
`

export const ViewHead = styled.div`
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-size: 0;
    h2{
        font-size: 10px;
        font-weight: 100;
        color: #646464;
        padding-bottom: 8px;
    }
`

export const ViewTitle = styled.div`
    font-size: 27px;
    font-weight: 900;
    color: black;
    padding-bottom: 8px;
    white-space: pre-wrap;
    line-height: 40px;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans';
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
`

export const ViewTags = styled.div`
    font-size: 15px;
    color: #646464;
    font-family: 'Spoqa Han Sans';
    -webkit-font-smoothing: antialiased;
`

export const ViewStat = styled.div`
    margin-top: 15px;
    font-size: 15px;
    .data-title {
        color: #afafaf;
        margin-right: 5px;
    }
    span:not(.data-title) {
    margin-right: 15px;
    font-weight: 400;
    }
`