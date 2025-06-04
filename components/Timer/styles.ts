import styled from "styled-components";

export const Container = styled.div`
  color: white;
  position: relative;

  @media (max-width: 700px) {
  }
`;

export const Frame = styled.div`
  img {
    @media (max-width: 700px) {
      width: 280px;
    }
  }
`;

export const TimeDiv = styled.div`
  position: absolute;
  color: #ffe44c !important;
  top: 155px;
  width: 100%;
  font-size: 78px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  font-family: "BlackNight";
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (max-width: 700px) {
    font-size: 38px;
    gap: 15px;
    margin-top: 5px;
  }

  span:nth-child(2) {
    font-size: 70px;

    @media (max-width: 700px) {
      font-size: 42px;
      letter-spacing: 5px;
    }
  }
`;

export const CustomPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;

  &:hover {
    scale: 1.02;
  }

  @media (max-width: 700px) {
    padding: 10px;
    padding-left: 12px;
    height: 40px;
    width: 40px;
    font-size: 20px;
  }
`;

export const Play = styled.img`
  width: 55px;
`;

export const Thumbnail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  background-image: url("/chromenesia.jpg");
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
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  transition: 0.3s;
  z-index: 2;
  height: 110px;

  @media (max-width: 700px) {
    height: 50px;
    top: 60%;
    font-size: 20px;
  }
`;

export const Icon = styled.img`
  width: 120px;
  margin-top: 50px;

  @media (max-width: 700px) {
  }
`;

export const Info = styled.div`
  width: 100%;
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
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
`;

export const As = styled.div`
  font-family: "Key";
  font-size: 30px;
`;
