import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: calc(100% - 400px);
  margin: 100px 100px 0px;

  img {
    width: 700px;
  }

  @media (max-width: 700px) {
    width: calc(100% - 20px);
    margin: 0 10px;

    img {
      width: 450px;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  text-align: center;

  .default,
  .hover {
    width: 100px;
    position: absolute;
    text-align: center;
    transition: opacity 0.3s ease;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hover {
    width: 950px;
    height: 600px;
    margin-top: 5px;
    margin-left: 10px;
    opacity: 0;
    pointer-events: none;

    @media (max-width: 700px) {
      width: 700px;
      height: 460px;
      margin-top: 15px;
    }
  }

  &:hover .hover {
    opacity: 1;
  }

  .default {
    margin-top: -14px;
    width: 140px;
    z-index: 1;

    @media (max-width: 700px) {
      width: 110px;
      margin-top: -24px;
    }
  }

  img {
    position: absolute;
    width: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 700px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

export const Title = styled.img`
  width: 150px;

  @media (max-width: 500px) {
    width: 52px;
  }
`;

export const ArtifactsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 50px;
  direction: rtl;
  grid-auto-rows: max-content;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
