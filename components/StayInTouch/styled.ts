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
    
    & > span {
        font-family: Windsor,serif;
        font-size: 48px;
        color: #E3D641;
        text-shadow: 0 0 20px #E3D641;
    }

    @media(max-width: 500px){
        flex-direction: column;
        align-items: start;
        & > * {
            margin: 0;
        }
        & > span {
            font-size: 30px;
            text-shadow: 0 0 20px #E3D641;
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
    
    font-family: "Windsor",serif;
    font-size: 28px;
    color: #d9d9d9;
    padding: 0 15px;
    
    @media(max-width: 500px){
        height: 28px;
        width: 150px;
        
        font-size: 22px;
        padding: 0 15px;
    }
`


const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(720deg);
    }
`

const changeFill = (success: boolean) => keyframes`
    0% {
        fill: #E3D641; 
    }
    20%{
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
