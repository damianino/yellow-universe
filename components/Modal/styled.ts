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
    
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    text-align: center;
    transition: 1s;
`

export const Content = styled.div`
    overflow: auto;
`

export const CloseModalBtn = styled.img`
    width: 15px;
    float: right;
    margin-top: -30px
`