import styled from "styled-components";

export const ArrowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 600px;
    position: absolute;
    z-index: 1;
    top: 50%;
    
    pointer-events: none;
    & > img {
        pointer-events: auto;
    }

    @media (max-width: 500px) {
        width: 350px !important;
    }
`

export const SliderContainer = styled.div`
    display: flex;
    //height: 80vh;
    justify-content: center;
    align-items: center;
`