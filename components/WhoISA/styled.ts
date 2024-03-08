import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: relative;

    color: #D9D9D9;
    font-family: 'Windsor',serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 22px;
`

export const TitleContainer = styled.div`
    width: 100%;

    color: #E3D641;
    font-size: 86px;

    display: flex;
    flex-direction: column;

    margin-bottom: -300px;

    & > h2 {
        margin: 0;
    }

    & > :nth-child(2) {
        margin-top: -50px;
        align-self: center;
    }

    & > :nth-child(3) {
        margin-top: -50px;
        align-self: end;
    }
`

export const ContentGrid = styled.div`
    position: relative;
    z-index: 2;

    width: 80%;
    display: grid;
    grid-template-columns: 600px 250px;
    gap: 135px
`

export const LeftCol = styled.div`
    grid-column: 1;

    display: flex;
    flex-direction: column;

    & > img {
        width: 280px;
        align-self: end;
        margin-bottom: 25px;
    }

    & > :nth-child(1) {
        margin-top: 150px;;
    }

    & > :nth-child(3) {
        margin-top: 100px;;
        width: 450px;
    }
`

export const RightCol = styled.div`
    grid-column: 2;

    display: flex;
    flex-direction: column;

    width: inherit;

    & > img {
        width: 250px
    }

    & > p {
        margin: 200px 0 130px 0;
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
`