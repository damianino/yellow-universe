import styled from "styled-components";

export const Container = styled.div`
    border: solid 1px #E3D641;
    margin-top: 50px;
    margin-left: -100px;

    width: 600px;
    height: 350px;

    position: relative;

    & > img {
        position: absolute;
        left:75px; 
        top: -40px;
        width: 250px;
    }

    & > p {
        margin: 0;
        color: #D8CC40;
        letter-spacing: 25px;
        font-size: 36px;
        position: absolute;
        bottom: -25px;
        right: 75px;
        width: 215px;
    }
`