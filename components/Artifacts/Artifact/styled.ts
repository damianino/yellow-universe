import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: fit-content;
    
    display: flex;
    flex-direction: column;
    
    @media(max-width: 500px){
        width: 100px;
    }
    
    & > img {
        width: 100%;
        outline: #D9D9D9 1px solid;
    } 
    & > div {
        outline: #D9D9D9 1px solid;
        margin-top: 1px;
        
        font-family: Windsor,serif;
        font-size: 22px;
        color:#D9D9D9;
        direction: ltr;
        padding: 0 10px;

        @media(max-width: 500px){
            font-size: 16px;
        }
    }
`
