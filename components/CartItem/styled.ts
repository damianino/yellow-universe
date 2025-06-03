import styled from "styled-components";

export const ContainerItem = styled.div`
  padding: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
  z-index: 123;

  @media (max-width: 700px) {
    padding: 15px;
    gap: 10px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 70px;

  img {
    height: 70px;
    width: 70px;
  }
`;

export const Text = styled.div`
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  display: flex;

  @media (max-width: 700px) {
    gap: 0px;
  }
`;

export const TitleItem = styled.a`
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const SubTitle = styled.div`
  font-size: 12px;
  display: flex;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const Count = styled.div`
  margin-left: auto;
  color: white !important;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 700px) {
    gap: 5px;
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Tap = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
`;
