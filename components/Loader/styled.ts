import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
        filter: drop-shadow(0 0 1px #E3D641)
    }
    50% {
        filter: drop-shadow(0 0 20px #E3D641)
    }

    100% {
        filter: drop-shadow(0 0 1px #E3D641)
    }
`

const fadeout = keyframes`
    0% {
            opacity: 100%;
        }
    
    70% {
        opacity: 100%;
    }

    99% {
        opacity: 0;
    }

    100% {
        display: none;
    }
`

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    z-index: 10;

    background-color: #000;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;

    animation: 7s ${fadeout} normal;

    & > img {
        height: 300px;
        margin-top: -150px;

        animation: 4s ${animation} infinite;
    }

    @media (max-width: 500px) {
        & > img {
        height: 100px;
        margin-top: -50px;
        }
    }
`

