import styled from "styled-components";

export const DivApp = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color : #F4F4F4;
`

export const DivMenu = styled.div`
    background-color : #727DBA;
    color : white;
    height: 80px;
    width : 100%;
    font-size: 1rem;
    display : flex;
    align-items : center;
    font-family : 'Nunito Sans', sans-serif;
`
export const DivRodape = styled.div`
    background-color : #727DBA;
    color : white;
    height : 50px;
    font-family : 'Nunito Sans', sans-serif;
    display : flex;
    align-items : center;
    justify-content : center;
`

export const LogoMenu = styled.h1`
    margin-left : 4rem;
`

export const DivHome = styled.div`

    background-color : #017694;
    margin-top : 8rem;
    margin-bottom : 13rem;
    display : flex;
    justify-content : center;
    color : white;

`

export const HomeImage = styled.img`
    width : 100%;
    height : 100%;
    margin-left : 2rem;
`

export const HomeColunaDireita = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align : center;
    margin : 5rem 2rem;
`

export const HomeH1 = styled.h1`
    font-size : 35px;
`

export const HomeP = styled.p`
    font-size : 22px;
    font-weight : 200;
`

export const BotaoCadastro = styled.input`
    border-radius : 10px;
    background-color : #62617E;
    color : white;
    border : none;
    text-decoration : none;
    width : 10rem;
    height : 2.5rem;
    margin-right : 2rem;
    margin-top : 3rem;
    cursor : pointer;
    &:hover {
        background-color : #595870;
    }
`

export const BotaoLogin = styled.input`
    border-radius : 10px;
    background-color : #4A4964;
    color : white;
    border : none;
    text-decoration : none;
    width : 10rem;
    height : 2.5rem;
    margin-top : 3rem;
    cursor : pointer;
    &:hover {
        background-color : #3F3E56;
    }
`