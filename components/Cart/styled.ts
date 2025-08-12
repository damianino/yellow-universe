import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop: any) => prop !== "isOpen",
})<{
  isOpen?: boolean;
}>`
  display: ${(props) => (props.isOpen ? "none" : "block")};
  position: fixed;
  padding: 20px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  top: 20px;
  bottom: initial;
  right: 20px;
  z-index: 2;

  &:hover {
    box-shadow: #e3d641;
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const ModalContainer = styled.div`
  padding: 40px;
  width: 520px;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 2;
  background-color: black;

  h5 {
    position: relative;
    top: 50px;
    text-align: center;
    font-size: 18px;

    @media (max-width: 700px) {
      top: 40px;
      font-size: 12px;
      max-width: 270px;
      margin: 20px auto;
    }
  }

  @media (max-width: 700px) {
    width: 320px;
    padding: 15px;
  }

  @media (max-width: 400px) {
    width: 280px;
    padding: 15px;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  margin-bottom: 0;

  @media (max-width: 700px) {
    font-size: 18px;
    margin-inline: 10px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Sum = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  padding-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 12px;
    padding-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Delivery = styled.div`
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 30px;

  @media (max-width: 700px) {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-inline: 10px;
  }
`;

export const Info = styled.div`
  font-size: 14px;
  text-align: right;
  margin-top: 40px;

  @media (max-width: 700px) {
    font-size: 8px;
    margin-top: 0px;
  }
`;

export const Total = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  margin-block: 20px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const OrderButton = styled.button`
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
  height: 60px;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  cursor: pointer;
  z-index: 23321;
  position: relative;

  /* &:hover {
    color: #000000;
    background-color: #e3d641;
    transition: background-color 0.3s ease-in-out;
  } */

  @media (max-width: 700px) {
    padding-top: 0px;
    font-size: 13px;
    height: 40px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  margin: 10px 0 20px;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 700px) {
    gap: 5px;
    margin: 5px 0 10px;
  }

  label {
    gap: 5px;
    display: flex;

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }

  input[type="radio"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #ffd700;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 0;

    &:checked {
      border-color: #ffd700;
    }

    &:checked::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: #ffd700;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0px 0px 5px 3px rgb(255 204 16 / 70%);
    }
  }
`;

export const Ship = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 225px;
  }

  @media (max-width: 700px) {
    gap: 0px;

    input {
      width: 105px;
      padding: 2px 10px;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;

  @media (max-width: 700px) {
    left: 10px;
    top: 45px;

    img {
      width: 300px;
      height: 40px;
    }
  }
  @media (max-width: 400px) {
    left: 6px;
    top: 30px;

    img {
      width: 273px;
      height: 40px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;

  @media (max-width: 700px) {
    height: 50px;
    margin-left: 3px;
  }
  @media (max-width: 400px) {
    margin-left: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  z-index: 2332;

  @media (max-width: 700px) {
    height: 50px;
    margin-left: 3px;
  }
  @media (max-width: 400px) {
    margin-left: 5px;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  outline: none;
  font: inherit;
  font-size: 16px;
  background: transparent !important;
  color: white;
  z-index: 2;

  @media (max-width: 700px) {
    width: -webkit-fill-available;
    height: 40px;
    font-size: 12px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    width: 100%;
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: white !important;
    caret-color: white;
    -webkit-background-color: transparent !important;
    transition: background-color 9999s ease-in-out 0s !important;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 700px) {
    width: 350px;
    height: 770px;
  }
  @media (max-width: 400px) {
    width: 310px;
    height: 755px;
  }
`;

export const BackgroundInput = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 700px) {
    width: 100%;
    height: 40px;
  }
`;

export const SuccessInput = styled.img`
  position: absolute;
  top: 90px;
  left: 0;
  height: 80px;

  @media (max-width: 700px) {
    top: 55px;
    width: 100%;
    height: 70px;
  }
`;

export const BackgroundSmallInput = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 700px) {
    width: 100%;
    height: 45px;
  }
`;

export const TgText = styled.div`
  font-size: 12px;
  color: #afafaf;
  z-index: 23;

  @media (max-width: 700px) {
    line-height: 10px;
    font-size: 8px;
    margin-left: 10px;
  }

  a {
    cursor: pointer;
    color: #ffd700;

    :hover {
      color: #fff1a6;
    }
  }
`;

export const Selector = styled.select`
  padding: 4px 8px;
  font-size: 16px;
  z-index: 4;
  color: white;
  background-color: black;
  border: none;
  margin-left: auto;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
