import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: relative;

    color: #D9D9D9;
    font-family: "Bookman Old Style", Georgia, serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 14px;

    margin-bottom: 100px;

    @media (max-width: 500px) {
        font-size: 12px;
        text-align: left;
    }
`

export const TitleContainer = styled.img`
    width: 100%;
    margin-bottom: -300px;

    @media (max-width: 500px) {
        margin-bottom: 0;
        align-self: center;  
        width: 100vw;
    }
`

export const ContentGrid = styled.div`
    position: relative;
    z-index: 2;

    width: 100%;
    display: grid;
    grid-template-columns: 40% 30%;
    gap: 135px;

    @media (max-width: 500px) {
        width: 100%;
        grid-template-columns: 100%;
        gap: 0;
    }
`

export const LeftCol = styled.div`
    grid-column: 1;

    display: flex;
    flex-direction: column;

    & > img {
        width: 400px;
        align-self: center;
        margin-bottom: 15px;
    }

    & > :nth-child(1) {
        margin-top: 150px;;
    }

    & > :nth-child(3) {
        width: 450px;
    }

    @media (max-width: 500px) {
        & > img {
            width: 280px;
            align-self: center;
            margin: 20px 0 0 0;
        }

        & > :nth-child(1) {
            margin: 0;
        }

        & > :nth-child(3) {
            margin-top: 20px;;
            width: 100%;
        }
    }
`

export const RightCol = styled.div`
    grid-column: 2;

    display: flex;
    flex-direction: column;

    width: inherit;

    & > p {
        margin: 250px 0 100px 0;
    }

    & > div> div> div>img {
        width: 400px;
        align-self: center;
        margin-top: 50px;
    }

    @media (max-width: 500px) {
        grid-column: 1;

        & > p {
            margin-top: 50px;
            order:1;
        }
    }   
`

export const PortraitWrapper = styled.div`
    display: flex; 
    flex-direction: "column"; 
    justify-content:"center";
    align-items: center;
    width: fit-content;

    & > span {
        color: #E3D641;
        font-size: 36px;
    }

    @media (max-width: 500px){
        width: 70%;
        align-self: end;
    }
`

export const ImageBorder = styled.div`
    border: solid 1px #E3D641;
    padding: 20px;

    width: 500px;

    display: flex;
    justify-content: end;

    & :after {
        content: "A.";
        
    }

    & > img {
        width: 300px;
    }

    @media (max-width: 500px) {
        width: 100%;

        & > img {
        width: 50%;
    }
    }
`