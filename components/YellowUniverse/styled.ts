import styled from "styled-components";

export const Container = styled.section`
    height: 1100px;
    width: 80vw;

    display: flex;
    justify-content: space-around;

    position: relative;

    color: #D9D9D9;
    font-family: 'Windsor',serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 22px;
`

export const YellowSquare = styled.div`
    position: absolute;
    width: 70%;
    height: 950px;
    margin-left:150px;
    margin-top: 50px;

    border: solid 1px #E3D641;
    z-index: 1;
`

export const ContentGrid = styled.div`
    position: relative;
    z-index: 2;

    width: 80%;
    display: grid;
    grid-template-columns: 52% 40%;
    gap: 150px
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

    & > h2 {
        margin: 0;
        color:  #E3D641;
    }

    & > p {
        margin-top: 150px;;
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