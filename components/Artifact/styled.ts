import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: calc(100% - 400px);
  margin: 100px 100px 0px;

  img {
    width: 150px;
  }

  @media (max-width: 700px) {
    width: calc(100% - 20px);
    margin: 0 10px;
  }
`;

export const Button = styled.button`
  background-color: yellow;
  padding: 10px 20px;
  text-align: center;
  border-radius: 24px;

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
