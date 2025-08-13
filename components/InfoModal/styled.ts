import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  padding: 32px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: white;
  overflow: visible;

  @media (max-width: 700px) {
    /* margin: 0 20px; */
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 24px;
  text-align: center;
  color: #fff;
`;

export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin-bottom: 20px;

  img {
    flex-shrink: 0;
    height: 200px;
    width: auto;
    border-radius: 12px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 1.5;
  /* color: #222; */
  text-align: center;
  margin: 0;
  text-align: justify;

  div {
    margin-block: 4px;
  }
  div span {
    font-weight: bold;
  }

  @media (max-width: 700px) {
    display: block;
    margin: 0 0 16px 0;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  /* color: #222; */
  text-align: center;
  margin: 10px 0 0px 0;
  text-align: justify;
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
  }
`;

export const BuyButton = styled.img`
  display: block;
  margin: 0px auto;
  /* padding: 14px 28px; */
  /* background-color: #000; */
  /* color: #fff; */
  /* font-size: 16px; */
  /* border: none; */
  /* border-radius: 8px; */
  cursor: pointer;
  transition: 0.3s;
  width: 130px;

  &:hover {
    /* background-color: #333; */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: rgb(227, 214, 65);

  &:hover {
    color: #888;
  }
`;
