import styled from "styled-components";

export const CardWrapper = styled.div`
    margin: 0 200px;
    
    display: flex;
    justify-content: space-between;

    @media(max-width: 500px) {
        margin: 0 10px;
        
        flex-direction: column;
    }


`

export const ImageContainer = styled.div`
    width: 500px;
    height: 500px;

    min-width: 400px;
    min-height: 400px;
    
    color: #D9D9D9;
    font-family: "Bookman Old Style", Georgia, serif;
    font-size: 32px;

    display: flex;
    justify-content: end;
    
    & > span {
        align-self: center;
    }
    
    @media(max-width: 500px) {
        align-self: center;
        min-width: 300px;
        min-height: 300px;
        width:300px;
        height: 300px;
        margin-bottom: 10px;
        justify-content: center;
    }
`

export const TextContainer = styled.div`
    width: 48%;
    padding: 20px;
    padding-top: 0;
    
    color: #D9D9D9;
    font-family: "Bookman Old Style", Georgia, serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 16px;

    @media(max-width: 500px) {
        width: calc(100% - 40px);
        font-size: 12px;
    }
`

export const TitleImg = styled.img`
    height: 150px;
    
    @media(max-width: 500px) {
        width: 90%;
        height: auto;
    }
`

export const Title = styled.h1`
    margin: 50px;
    font-size: 41px;
    font-family: "Bookman Old Style", Georgia, serif;;
    color: #E3D641;
    
    @media(max-width: 500px) {
        font-size: 38px;
        margin: 20px;
    }
`

export const Credits = styled.p`
    font-family: "Bookman Old Style", Georgia, serif;
    white-space: pre-wrap;
    text-align: justify;
    overflow: scroll;
`

export const CreditsBtn = styled.text`
    font-family: "Bookman Old Style", Georgia, serif;
    white-space: pre-wrap;
    text-align: justify;
    background-color: none;
    border: white 1px solid;
    outline: none;
    padding: 5px 10px;
`

export const CloseModalBtn = styled.img`
    width: 15px;
    float: right;
    margin-top: -30px
`