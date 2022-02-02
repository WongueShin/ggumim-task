import React, {useState, useEffect} from 'react';
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


function MainView (props:{data:any}){
    const [condition, setCondition] = useState(false);
    useEffect(()=>{
        if(props.data.productList){
            setCondition(true);
        }
    })

    return(
        <>
            <S.globalStyle/>
            <S.Main>
                <MainViewTitle/>
            </S.Main>
        </>
    )
}


export default MainView