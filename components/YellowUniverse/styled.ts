import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;
    margin-bottom: 100px;

    display: grid;
    grid-template-columns: auto 50% auto;
    grid-gap: 20px;
    align-items: center;

    color: #D9D9D9;
    font-family: "Bookman Old Style", Georgia, serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 14px;
    

    & > img {
        max-width: 100%
    }

    & > p {
        margin: 0;
    }

    @media (max-width: 500px) {
        margin-bottom: 50px;
        width: 95vw;
        font-size: 12px;
        grid-template-columns: auto;

        & > img {
            grid-row: 1;
            height: 50px;
            margin: auto;
        }

        & > p {
            grid-row: 2;
            grid-column: span 2;
            margin: 0 50px;
        }
    }
`