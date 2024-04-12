import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    font-size: 22px;
    font-family: "Bookman Old Style", Georgia, serif;

    @media(max-width: 500px){
        height: 150px;
        font-size: 12px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 70%;

    & > img {
        height: 80px;
        cursor: pointer;
    }

    @media(max-width: 500px){
        width: 80%;
        & > img {
            height: 22px;
        }
    }
`