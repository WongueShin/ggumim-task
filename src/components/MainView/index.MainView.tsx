import React, {useState, useEffect, useCallback} from 'react';
import * as S from "./style.MainView";

function MainViewTitle(){
    return(
            <S.ViewHead>
                <h2>2022.01.12 17:55</h2>
                <S.ViewTitle>
                화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방
                </S.ViewTitle>
                <S.ViewTags>    
                #방꾸미기    
                #우드톤    
                #화이트    
                #라탄           
                </S.ViewTags>
                <S.ViewStat>
                    <span className='data-title'>보관함</span>
                    <span>94</span>
                    <span className = 'data-title'>댓글</span>
                    <span>0</span>
                </S.ViewStat>
            </S.ViewHead>
    )
}

function Tag (JsonData:any, selectedTag:number, setSelectedTag:any, condition:boolean){
    const HandleClickImg = useCallback(()=>setSelectedTag(undefined) ,[])
    return(
        JsonData.productList.map((product:{pointX: number, pointY: number, imageUrl: string, productName: string, outside: boolean, priceDiscount: number, discountRate: number}, index: number) => {
            return(
                <S.Tag key={index} dataX = {product.pointX}  dataY = {product.pointY}>
                    {
                        index === selectedTag?<>
                        <img className='closeIcon' onClick={HandleClickImg} src={condition? 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png' : './image/tagCloseIcon.png'}/>
                        <S.Tooltip index= {index}>
                            <S.TooltipImgdiv url={product.imageUrl} />
                            <S.Desc>
                                <S.FurnitureName>
                                    {product.productName}
                                </S.FurnitureName>
                                <S.FurniturePrice>
                                    {
                                        product.outside?<>
                                        <S.ExpectedPrice>예상가</S.ExpectedPrice>
                                        <S.PriceDiscount>{product.priceDiscount}</S.PriceDiscount>
                                        </>:<S.PriceDiscount>
                                            <span>{product.discountRate}%</span>
                                            {product.priceDiscount}
                                        </S.PriceDiscount>
                                    }
                                </S.FurniturePrice>
                            </S.Desc>
                            <S.MoveIconWrapper>
                                <img src='https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png' alt='상품보기'/>
                            </S.MoveIconWrapper>
                        </S.Tooltip>
                        </>:
                        <img className='tagIcon' onClick={() => setSelectedTag(index)} src={condition? 'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png' : './image/tagIcon.png'}/>
                        
                    }
                   </S.Tag>
            )
        }))    
}


function MainView (props:{data:any}){
    const JsonData = props.data;
    const [condition, setCondition] = useState(false);
    const [selectedTag, setSelectedTag]:any[] = useState(undefined);



    useEffect(()=>{
        if(props.data.productList){
            setCondition(true);
        }
    })
    // img 원본 1000px x 1248px  => 800px x 998.4px (0.8배율)
    return(
        <>
            <S.Main>
                <MainViewTitle/>
                <S.ViewContentWarpper>
                    <S.ViewContent>
                        <img className='ViewImg' src={condition? '//cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg': './image/main.jpeg'} onClick={()=> setSelectedTag(undefined)} />
                        {Tag(JsonData, selectedTag, setSelectedTag, condition)}
                        <S.ProductSwiper>
                            <S.SwiperWrapper>
                                {
                                   JsonData.productList.map((product:{pointX: number, pointY: number, imageUrl: string, productName: string, outside: boolean, priceDiscount: number, discountRate: number}, index: number) => { 
                                        return(
                                        <S.ItemPicture key={index} className={`${index === selectedTag}`} onClick={()=> {if(selectedTag === undefined || selectedTag !== index){return setSelectedTag(index)} setSelectedTag(undefined)}}>
                                            <S.ItemPictureSubImg imageUrl={product.imageUrl}>
                                                <S.DisCountBadge outside={product.outside}>
                                                    {product.discountRate}%
                                                </S.DisCountBadge>
                                            </S.ItemPictureSubImg>
                                        </S.ItemPicture>
                                        )
                                })
                            }
                            </S.SwiperWrapper>
                        </S.ProductSwiper>
                    </S.ViewContent>
                </S.ViewContentWarpper>
            </S.Main>
        </>
    )
}


export default MainView