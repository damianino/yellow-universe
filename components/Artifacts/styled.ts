import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 400px);
    margin: 0 100px 0 100px;
    
    @media(max-width: 500px){
        width: calc(100% - 20px);
        margin: 0 10px;
    }
`

export const Title = styled.img`
    width: 150px;

    @media(max-width: 500px){
        width: 52px;
    }
`

export const ArtifactsList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 50px;
    direction: rtl;
    grid-auto-rows: max-content;

    @media(max-width: 500px){
        grid-template-columns: repeat(2, 1fr);
    }
`