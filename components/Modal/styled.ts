import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    overflow: auto;

    z-index: 10;

    background-color: #000d;
`

export const Container = styled.div`
    margin: auto;
    width: fit-content;
    height: 80vh;
    padding: 50px;
    display: flex;
    
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    text-align: center;
    transition: 1s;
`

export const Content = styled.div`
    overflow: auto;

    display: flex;

    & > img{
        height: 70vh;
        align-self: center;
    }
`

export const CloseModalBtn = styled.img`
position: absolute;
    width: 15px;
    right: 50px;
    margin-top: -30px
`