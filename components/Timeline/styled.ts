import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 0 200px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    margin: 0 10px;

    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 500px;

  min-width: 400px;

  color: #d9d9d9;
  font-family: "Bookman Old Style", Georgia, serif;
  font-size: 32px;

  display: flex;
  justify-content: end;

  position: relative;

  & > span {
    align-self: center;
  }

  @media (max-width: 500px) {
    align-self: center;
    min-width: 300px;
    width: 300px;
    margin-bottom: 10px;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  width: 48%;
  padding: 20px;
  padding-top: 0;

  color: #d9d9d9;
  font-family: "Bookman Old Style", Georgia, serif;
  white-space: pre-wrap;
  text-align: justify;
  font-size: 16px;

  @media (max-width: 500px) {
    width: calc(100% - 40px);
    font-size: 12px;
  }
`;

export const TextVideoContainer = styled.div`
  width: 48%;
  padding: 20px;
  padding-top: 0;
  margin: 0 auto;
  color: #d9d9d9;
  font-family: "Bookman Old Style", Georgia, serif;
  white-space: pre-wrap;
  text-align: justify;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: calc(100% - 40px);
    font-size: 12px;
  }
`;

export const LinkContainer = styled.a`
  width: 48%;
  padding-top: 10px;
  color: #e3d641;
  font-family: "Bookman Old Style", Georgia, serif;
  white-space: pre-wrap;
  text-align: justify;
  font-size: 16px;

  @media (max-width: 500px) {
    width: calc(100% - 40px);
    font-size: 12px;
  }
`;

export const TitleImg = styled.img`
  height: 150px;

  @media (max-width: 500px) {
    width: 90%;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  margin: 50px;
  font-size: 41px;
  font-family: "Bookman Old Style", Georgia, serif;
  color: #e3d641;

  @media (max-width: 500px) {
    font-size: 28px;
    margin: 20px;
  }
`;

export const Credits = styled.p`
  font-family: "Bookman Old Style", Georgia, serif;
  white-space: pre-wrap;
  text-align: justify;
  overflow: scroll;
`;

export const CreditsBtn = styled.text`
  font-family: "Bookman Old Style", Georgia, serif;
  white-space: pre-wrap;
  text-align: justify;
  background-color: none;
  border: white 1px solid;
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  position: absolute;
  z-index: 1;
  top: 50%;

  pointer-events: none;
  & > img {
    pointer-events: auto;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 850px;

  @media (max-width: 700px) {
    height: 400px;
  }
`;

export const ChapterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
