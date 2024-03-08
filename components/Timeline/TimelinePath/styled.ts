import styled from "styled-components";

export const Wrapper = styled.div`
    & > div > svg {
        width: 100vw; 
        height: 400px;
        
        @media(max-width: 500px){
            height: 100px;
        }
    }
`