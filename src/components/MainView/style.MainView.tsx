import styled from "styled-components";

export const Main = styled.main`
    padding: 110px 0 0 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
`

export const ViewHead = styled.div`
    object-fit: scale-down;
    width: fit-content;
    box-sizing: border-box;
    margin: 0;
    font-size: 0;
    h2{
        font-size: 10px;
        font-weight: 100;
        color: #646464;
        padding-bottom: 8px;
    }
`

export const ViewTitle = styled.div`
    width: 800px;
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

export const ViewContentWarpper = styled.div`
    box-sizing: border-box;
    padding: 40px 0;
    font-size: 0;
`
export const ViewContent = styled.div`
    
    cursor: pointer;
    position: relative;
    .ViewImg{
        width: 800px;
    }
`
export const Tag = styled.div<{dataX: number, dataY: number}>`
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    top: ${props=> props.dataX * 1.6 }px;
    left: ${props=> props.dataY * 1.6}px;
    img{
        width: 32px;
        height: 32px;
    }
`

export const Tooltip = styled.span<{index: number}>`
    &&::before{
        top: unset;
        bottom: -8px;
        transform: rotate(180deg);
        content: "";
        position: absolute;
        left: ${(Props)=>Props.index === 4? "170px": "34px"};
        width: 12px;
        height: 8px;
        background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1100;
    }
    top: unset;
    bottom: 52px;
    z-index: 1000;
    display: flex;
    align-items: center;
    position: absolute;
    left: ${(Props)=>Props.index === 4? "-160px": "-20px"};
    background-color: rgba(255,255,255,0.95);
    width: 220px;
    height: 86px;
    padding: 8px 0 8px 8px;
    margin-top: 16px;
    border-radius: 7px;
    -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
    box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
    font-size: 14px;
    color: #4a4a4a;  
`

export const TooltipImgdiv = styled.div<{url: string}>`
    
    background-image: url(${(Props) => Props.url });
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    margin-right: 8px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    
`

export const Desc = styled.div`
        flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 2px;
    overflow: hidden;
    text-align: left;
`

export const FurnitureName = styled.div`
    width: 100%;
    overflow: hidden;
    color: #333c45;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.3em;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: initial;
    font-weight: 900;
`

export const MoveIconWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: auto;
    margin-right: 2px;
    img{
        width: 20px;
        height: 20px;
    }
`

export const FurniturePrice = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
`
export const ExpectedPrice = styled.span`
    line-height: 1.2em !important;
    color: #898f94;
    font-size: 11px;
    font-weight: bold;
    margin-right: 4px;
`
export const PriceDiscount = styled.span`
    line-height: 1.2em !important;
    display: flex;
    align-items: center;
    color: #181d1f;
    font-size: 16px;
    font-weight: bold;
    span{
        line-height: 1.2em !important;
        color: #ff585d;
        margin-right: 4px;
    }
`

export const ProductSwiper = styled.div`
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: auto;
    background-color: #fff;
    padding: 0 10px;
    touch-action: pan-y;
`

export const SwiperWrapper = styled.div`
    align-items: center;
    transition-duration: 300ms;
    transform: translate3d(0px, 0px, 0px);
    font-family: 'Spoqa Han Sans Neo',sans-serif;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
`

export const ItemPicture = styled.div`
    display: inline-flex;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin: 28px 6px;
    flex-shrink: 0;
    position: relative;
    transition-property: transform;
    &.true{
        background: linear-gradient(163.54deg ,#ff659e 8.22%,#f56b30 94.1%);
        margin: 26px 4px;
        padding: 2px;
        border-radius: 18px;
    }
`

export const DisCountBadge = styled.div<{outside: boolean}>`
    display: ${(Props)=>Props.outside? "none":"block"};
    position: absolute;
    top: 0;
    right: 5px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
    width: 24px;
    height: 28px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 11px;
    font-weight: bold;
    line-height: 25px;
    color: white;
    text-align: center;
    padding-left: 1px;
`

export const ItemPictureSubImg = styled.div<{imageUrl: string}>`
    background-image: url(${(Props)=>Props.imageUrl});
    position: relative;
    width: 106px;
    height: 106px;
    border-radius: 16px;
    border: 0.5px solid #aaafb9;
    user-select: none;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`