import styled from "styled-components";
import { useRef, useState } from "react";
import {
  As,
  CustomPlayButton,
  Icon,
  Info,
  Name,
  OverlayText,
  Play,
  Role,
  Roles,
  Thumbnail,
  TimerButton,
  TimerContainer,
  Title,
  VideoContainer,
} from "./styles";

import ReactPlayer from "react-player";
import Timer from "../Timer";

export default function VimeoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toggleFullScreen();
    }
  };

  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const onPause = () => {
    setIsPlaying(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const isFilm = true;

  return (
    <VideoContainer ref={containerRef}>
      {!isPlaying && (
        <>
          <Thumbnail></Thumbnail>
          {isFilm ? (
            <CustomPlayButton
              film={isFilm}
              onClick={isFilm ? togglePlay : () => {}}
            >
              <Play src="/play.svg" alt="play" />
            </CustomPlayButton>
          ) : (
            <TimerButton>
              <TimerContainer>
                <Timer />
              </TimerContainer>
            </TimerButton>
          )}
          <Title src="/Chromnesia-2.png" alt="Логотип" />
          <Info>
            <Roles>
              <Role>
                <Name>Artyom Shalak</Name>
                <As>as yellow</As>
              </Role>
              <Role>
                <Name>Giorgi Kurashvili</Name>
                <As>as stranger</As>
              </Role>
              <Role>
                <As>director</As>
                <Name>Artyom Shalak</Name>
              </Role>
              <Role>
                <As>2nd director</As>
                <Name>Felix Oganov</Name>
              </Role>
              <Role>
                <As>dop</As>
                <Name>Michail Denisov</Name>
              </Role>
            </Roles>
            <Icon src="/mpaa-g.png" alt="mpaa" />
          </Info>
        </>
      )}

      <ReactPlayer
        ref={playerRef}
        url="https://vimeo.com/524933864"
        playing={isPlaying}
        controls={true}
        width="100%"
        height="100%"
        // onPause={() => setIsPlaying(false)}
        onPause={() => {
          setIsPlaying(false);
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
        }}
      />
    </VideoContainer>
  );
}
