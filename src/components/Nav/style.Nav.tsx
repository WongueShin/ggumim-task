import styled from "styled-components";

export const Navi = styled.nav`
    margin-top: 20px;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    z-index: 997;
    background-color: #fff;
    vertical-align: top;
    height: 80px;
`

export const LogoContainer = styled.div`
    padding: 0;
    margin-top: 15px;
    margin-bottom: 15px;
    display: inline-block;
    vertical-align: top;
`

export const Logo = styled.div`
    background-image: url(./image/logo.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 170px;
    height: 50px;
`

export const Menu = styled.div`
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 215px);
    position: relative;
`

export const Category = styled.div`
    display: inline-block;
    background-color: #fff;
    width: 170px;
    height: 80px;
    cursor: pointer;
`

export const Title = styled.div`
    margin: 0 auto;
    text-align: center;
`

export const Icon = styled.div`
    display: inline-block;
    margin-right: 5px;
    background-image: url('./image/MenuIcon.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 19px;
    height: 17px;
    vertical-align: top;
    margin-top: 33px;
`

export const MenuItem = styled.div`
    vertical-align: top;
    display: inline-block;
    color: #333c45;
    font-size: 18px;
    height: 80px;
    padding: 0 15px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
    font-family: "Spoqa Han Sans Neo" !important;
`

export const TitleText = styled(MenuItem)`
`

export const A = styled.a`
    cursor: pointer;
    color: #000;
    text-decoration: none;
`

export const Store = styled(MenuItem)`
`

export const Content = styled(MenuItem)`
    padding-top: 1px;
    color: #ee6d6d;
    border-bottom: 4px solid #ee6d6d;
`
export const Community = styled(MenuItem)`
`

export const Right = styled.div`
    float: right;
    position: relative;
`

export const SearchBar = styled(MenuItem)`
    padding: 0 12px 0 8px;
`
export const SearchInputWrapper = styled.div`
`

export const SearchInput = styled.div`
    width: 300px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
`
export const SearchText = styled.div`
    display: inline-block;
    padding-left: 18px;
    font-size: 13px;
    line-height: 40px;
    height: 40px;
    vertical-align: top;
    color: #9e9e9e;
`

export const SearchIcon = styled.div`
    display: inline-block;
    float: right;
    background-image: url(//cdn.ggumim.co.kr/storage/20190819234645GI8IRuYjml.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
    margin-top: 9px;
    vertical-align: top;
    margin-right: 15px;
`