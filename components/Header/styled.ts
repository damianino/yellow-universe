import styled from "styled-components";

export const Container = styled.header`
    width: calc(100% - 400px);
    display: flex;
    justify-content: space-between;
    gap: 70px;

    font-family: "Bookman Old Style", Georgia, serif;;
    color: #E3D641;
    
    @media(max-width: 500px){
        width: calc(100% - 10px);
    }
`

export const Title = styled.img`
    width: 100%;
    margin: 100px 0 80px 0;

    @media(max-width: 500px){
        width: calc(100vw - 10px);
        font-size: 38px;
        text-align-last: justify;
    }
`

export const SubTitle = styled.h2`
    font-family: "Bookman Old Style", Georgia, serif;;


    font-size: 1.7vw;
    letter-spacing: 1vw;
    
    margin: 0 ;
    
    @media(max-width: 500px){
        width: calc(100vw - 10px);
        font-size: 10px;
        letter-spacing: 7px;
        text-align-last: justify;
    }
`

export const ScrollDownContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    
    & > div {
        height: 140px;
        margin-bottom: 50px;
        border: #D9D9D9 1px solid;
        font-size: 11px;
        color: #D9D9D9;
        text-align: justify;
        text-align-last: justify;
        font-family: "Roboto Mono",sans-serif;
        font-weight: 200;

        writing-mode: vertical-rl;
        text-orientation: mixed;
    }   

    @media(max-width: 500px){
        display: none;
    }
`