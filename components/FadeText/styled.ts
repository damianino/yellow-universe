import styled from "styled-components";

const TextContainer = styled.div`

`

export const Chunk = styled.div<{inview: boolean}>`
& > span  {
    ${props => props.inview ? `
    opacity: 1;
    filter: blur(0);
    ` : ""}}
`