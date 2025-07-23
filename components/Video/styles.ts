import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 900px; /* Фиксированная высота */
  margin: auto;
  background: black;
  height: 100dvh;

  @media (max-width: 700px) {
    height: 100dvh;
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 8px;
  z-index: 22;
`;

export const CustomPlayButton = styled.button.withConfig({
  shouldForwardProp: (prop: any) => prop !== "film",
})<{
  film?: boolean;
}>`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.film ? "pointer" : "auto")};
  transition: 0.3s;
  z-index: 2;

  &:hover {
    scale: 1.02;
  }

  @media (max-width: 700px) {
    top: 30%;
    padding: 10px;
    padding-left: 12px;
    height: 40px;
    width: 40px;
    font-size: 20px;
  }
`;

export const TimerButton = styled.button`
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: 700px) {
    top: 230px;
    padding: 10px;
    padding-left: 12px;
    width: 100%;
    font-size: 20px;
  }
`;

export const Play = styled.img`
  width: 55px;

  @media (max-width: 700px) {
    width: 30px;
  }
`;

export const Thumbnail = styled.div`
  position: absolute;
  width: 100%;
  height: 85%;
  object-fit: cover;
  z-index: 1;
  background-image: url("/chromenesia.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    bottom: -20%;
    height: 50%;
    width: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0) 90%
    );
  }

  @media (max-width: 700px) {
  }
`;

export const Title = styled.img`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  transition: 0.3s;
  z-index: 2;
  height: 110px;

  @media (max-width: 700px) {
    height: 55px;
    top: 54%;
  }
`;

export const Icon = styled.img`
  width: 95px;
  margin-top: 0px;

  @media (max-width: 700px) {
    width: 60px;
  }
`;

export const Info = styled.div`
  width: 100%;
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;

  @media (max-width: 700px) {
    width: 90%;
    bottom: -40%;
  }
`;

export const Roles = styled.div`
  color: #5d5d5d8a;
  gap: 5px;
  transition: 0.3s;
  line-height: 30px;
  width: 65%;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  row-gap: 0px;

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 10px;
    top: 50%;
    gap: 3px;
    flex-flow: wrap;
  }
`;

export const Role = styled.div`
  display: flex;
  gap: 5px;
  align-items: baseline;
`;

export const Name = styled.div`
  font-family: "Rainer";
  font-size: 33px;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const As = styled.div`
  font-family: "Key";
  font-size: 23px;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const TimerContainer = styled.div`
  cursor: auto;
`;
