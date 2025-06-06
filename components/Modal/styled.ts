import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  overflow: auto;
  z-index: 10;
  background-color: #000d;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 700px) {
    padding: 10px 0;
  }
`;

export const Container = styled.div`
  margin: auto;
  width: fit-content;
  padding: 50px;
  display: flex;
  position: relative;
  /* height: 80vh; */

  text-align: center;
  justify-content: center;
  transition: 1s;

  overflow: auto;

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  /* overflow: auto; */

  display: flex;

  & > img {
    height: 70vh;
    align-self: center;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;

export const CloseModalBtn = styled.img`
  position: absolute;
  width: 30px;
  right: 0;
  margin-top: -30px;
  z-index: 222;
  cursor: pointer;

  @media (max-width: 500px) {
    right: 10px;
    top: 30px;
  }
`;
