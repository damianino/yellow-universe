import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    font-size: 28px;
    font-family: "Windsor",serif;

    @media(max-width: 500px){
        height: 150px;
        font-size: 16px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 50%;

    @media(max-width: 500px){
        width: 80%;
    }
    
    & > span {
        color: #D9D9D9;
    }

    & > span > a {
        color: #E3D641;
        text-decoration: none;
    }
`