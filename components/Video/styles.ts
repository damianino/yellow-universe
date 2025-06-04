import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 900px; /* Фиксированная высота */
  margin: auto;
  background: black;
  height: 100vh;

  @media (max-width: 700px) {
    height: 100vh;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.film ? "pointer" : "auto")};
  transition: 0.3s;
  z-index: 2;

  &:hover {
    scale: 1.02;
  }

  @media (max-width: 700px) {
    top: 200px;
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
  height: 100%;
  object-fit: cover;
  z-index: 1;
  background-image: url("/chromenesia.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    background: linear-gradient(to top, rgb(0 0 0), transparent);
  }

  @media (max-width: 700px) {
  }
`;

export const Title = styled.img`
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  transition: 0.3s;
  z-index: 2;
  height: 130px;

  @media (max-width: 700px) {
    height: 50px;
    top: 60%;
  }
`;

export const Icon = styled.img`
  width: 120px;
  margin-top: 20px;

  @media (max-width: 700px) {
    width: 60px;
  }
`;

export const Info = styled.div`
  width: 100%;
  position: absolute;
  top: 92%;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;

  @media (max-width: 700px) {
    width: 90%;
    top: 90%;
  }
`;

export const Roles = styled.div`
  color: #5d5d5d8a;
  gap: 13px;
  transition: 0.3s;
  line-height: 40px;
  width: 100%;
  justify-content: center;
  text-align: center;
  display: flex;

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 20px;
    top: 80%;
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
  font-size: 40px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const As = styled.div`
  font-family: "Key";
  font-size: 30px;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

export const TimerContainer = styled.div`
  cursor: auto;
`;
