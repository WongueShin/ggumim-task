import React, {ReactElement, useEffect, useState} from 'react';
import * as S from "./style.Nav";

function Nav( props:{data:any} ):ReactElement  {
    console.log(props.data);
    const [condition, setCondition] = useState(false);
    useEffect(()=>{
        if(props.data.productList){
            setCondition(true);
        }
    })
    console.log(condition);

    return(
        <S.NaviEmpty>
            <S.NaviFiexd>
                <S.Navi>
                    <S.LogoContainer>
                        <S.Logo condition= {condition}/>
                    </S.LogoContainer>
                    <S.Menu>
                    <S.Category>
                        <S.Title>
                            <S.Icon condition= {condition}/>
                            <S.TitleText>카테고리</S.TitleText>
                        </S.Title>
                    </S.Category>
                    <S.A>
                        <S.Store>스토어</S.Store>
                    </S.A>
                    <S.A>
                        <S.Content>컨탠츠</S.Content>
                    </S.A>
                    <S.A>
                        <S.Community>커뮤니티</S.Community>
                    </S.A>
                    <S.Right>
                        <S.SearchBar>
                            <S.SearchInputWrapper>
                                <S.SearchInput>
                                    <S.SearchText>
                                    내 스타일 매거진, 상품, 사진 검색
                                    </S.SearchText>
                                    <S.SearchIcon condition = {condition}/>
                                </S.SearchInput>
                            </S.SearchInputWrapper>
                        </S.SearchBar>
                    </S.Right>
                    </S.Menu>
                </S.Navi>
            </S.NaviFiexd>
        </S.NaviEmpty>
    )
}

export default Nav