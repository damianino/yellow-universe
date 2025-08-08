import styled from "styled-components";

export const ArrowContainer =  styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "box",
  })<{
    box?: boolean;
  }>`
    display: flex;
    justify-content: space-between;
    width: ${(props) => (props.box ? "400px" : "600px")};
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

export const SliderContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "box",
  })<{
    box?: boolean;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.box ? "500px" : "80vh")};
`

