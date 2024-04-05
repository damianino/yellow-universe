import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 500px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & > * {
        margin-right: 10px;
    }
    
    & > img {
       height: 80px;
    }

    @media(max-width: 500px){
        flex-direction: column;
        align-items: start;
        & > * {
            margin: 0;
        }
        & > img {
            height:43px;   
            margin-bottom: 10px;
        }

    }
`

export const InputWrapper = styled.div`
    align-items: center;
    display: flex;
`

export const Input = styled.input`
    height: 46px;
    width: 340px;
    background-color: transparent;
    outline: none;
    border: #D9D9D9 1px solid;
    border-radius: 0;
    
    font-family: "Bookman Old Style", Georgia, serif;
    font-size: 22px;
    color: #d9d9d9;
    padding: 0 15px;
    
    @media(max-width: 500px){
        height: 22px;
        width: 150px;
        
        font-size: 12px;
        padding: 0 15px;
    }
`


const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const changeFill = (success: boolean) => keyframes`
    0% {
        fill: #E3D641; 
    }
    50%{
        fill: ${success ? "forestgreen" : "indianred"}
    }
    80%{
        fill: ${success ? "forestgreen" : "indianred"}
    }
    100% {
    }
`

export const Button = styled.button<{ rotate: boolean, success: boolean }>`
    height: 48px;
    width: 48px;
    padding: 0;
    background-color: transparent;
    outline: none;
    border: #D9D9D9 1px solid;
    
    
    & > svg {
        animation: 1s ${(props) => props.rotate ? rotate : ""} ease-in-out;
    }
    & > svg > g >  path{
        animation: 3s ${(props) => props.rotate ? changeFill(props.success) : ""} ease-in-out;
    }
    
    &:hover{
        & > svg{
            fill: #E3D641;
        }
    }
    
    @media(max-width: 500px){
        height: 30px;
        width: 30px;
        margin-left: -1px;
        & > svg{
            height: 30px;
            width: 30px;
        }
    }
`
