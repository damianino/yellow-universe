import styled from "styled-components";

export const CardWrapper = styled.div`
    margin: 0 200px;
    
    display: flex;
    justify-content: space-between;

    @media(max-width: 500px) {
        margin: 0 10px;
        
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    width: 48%;
    border: #D9D9D9 1px solid;
    padding: 20px;

    height: fit-content;
    
    & > img {
        width: 100%;
    }
    
    @media(max-width: 500px) {
        width: calc(100% - 40px);
        margin-bottom: 10px;
    }
`

export const TextContainer = styled.div`
    width: 48%;
    padding: 20px;
    padding-top: 0;
    
    color: #D9D9D9;
    font-family: 'Windsor',serif;
    white-space: pre-wrap;
    text-align: justify;
    font-size: 22px;

    @media(max-width: 500px) {
        width: calc(100% - 40px);
        font-size: 16px;
    }
`

export const Title = styled.img`
    height: 150px;
    
    @media(max-width: 500px) {
        width: 90%;
    height: auto;
}
    }
`