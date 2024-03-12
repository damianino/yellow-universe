import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;
    margin-bottom: 100px;

    display: flex;
    justify-content: space-around;

    position: relative;

    color: #D9D9D9;
    font-family: 'Windsor',serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 22px;

    @media (max-width: 500px) {
        margin-bottom: 50px;
        width: 95vw;
        font-size: 16px;
        text-align: left;
    }
`

export const YellowSquare = styled.div`
    position: absolute;
    width: 70%;
    height: 950px;
    margin-left:150px;
    margin-top: 50px;

    border: solid 1px #E3D641;
    z-index: 1;

    @media (max-width: 500px) {
        height: 686px;
        margin-left: 54px;
        margin-top: 127px;
    }
`

export const ContentGrid = styled.div`
    position: relative;
    z-index: 2;

    width: 80%;
    display: grid;
    grid-template-columns: 52% 40%;
    gap: 150px;

    @media (max-width: 500px) {
        width: 100%;
        grid-template-columns: 100%;
        gap: 0;
        grid-row-gap: 20px;
    }
`

export const LeftCol = styled.div`
    grid-column: 1;

    display: flex;
    flex-direction: column;

    

    // img
    & > :nth-child(1) {
        width: 280px;
        align-self: end;
        margin-bottom: 25px;
    }

    // title
    & > :nth-child(2) {
        width: 600px;
        align-self: end;
        margin-right: -80px;
    }

    & > p {
        margin-top: 100px;
    }

    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        & > :nth-child(1) {
            order: 2;
            align-self: auto;
            grid-column: 1;
            width: 40vw;
            margin-top: 50px;
        }

        & > :nth-child(2) {
            grid-column: span 2;
            order: 1;
            margin-right: 0;
            width: 100%;
        }

        & > p {
            order: 2;
            grid-column: 2;
            margin-top: 0;
        }
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
        margin: 0 0 130px 0;
    }

    @media (max-width: 500px){
        grid-column: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;

        & > img {
            justify-self: end;
            grid-column: 2;
            width: 40vw;
            margin-top: 50px;
        }

        & > p {
            grid-column: 1;
            margin-top: 0;
            margin-bottom: 0;
            text-align: right;
        }
    }
`

export const RelativeWrap = styled.div`
    position: relative;
    margin: 0;
    width: 0;
    height:0
`

export const TextPart1 = styled.p`
    position: absolute;
    width: 350px;
`