import React from 'react';
import * as S from "./style.Nav";

function Nav () {
    return(
        <S.Navi>
            <S.LogoContainer>
                <S.Logo/>
            </S.LogoContainer>
            <S.Menu>
            <S.Category>
                <S.Title>
                    <S.Icon/>
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
                            <S.SearchIcon/>
                        </S.SearchInput>
                    </S.SearchInputWrapper>
                </S.SearchBar>
            </S.Right>
            </S.Menu>
        </S.Navi>
    )
}

export default Nav