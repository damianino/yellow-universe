import styled from "styled-components";
import { useRef, useState } from "react";
import {
  As,
  CustomPlayButton,
  Icon,
  Info,
  Name,
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

  const isFilm = false;

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
              <div style={{ flexBasis: "100%", height: "0" }} />
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

              <Role>
                <As>gen. prod</As>
                <Name>Artem Shtern, Felix Oganov</Name>
              </Role>
              <Role>
                <As>creative prod</As>
                <Name>Felix Oganov</Name>
              </Role>
              <Role>
                <As>line prod</As>
                <Name>Kira Arysheva</Name>
              </Role>
              <Role>
                <As>camera 1st ac </As>
                <Name>Danya Byakov, Peter Babitsky</Name>
              </Role>
              <Role>
                <As>production design prod. designer</As>
                <Name>Danya Byakov, Peter Babitsky</Name>
              </Role>
              <Role>
                <As>asst. designer </As>
                <Name>Sofia Soboleva</Name>
              </Role>
              <Role>
                <As>lighting and grip gaffer</As>
                <Name>Irakly Vasilkovsky</Name>
              </Role>
              <Role>
                <As>light</As>
                <Name>Peter Babitsky</Name>
              </Role>
              <Role>
                <As>key grip</As>
                <Name>Peter Pankratov</Name>
              </Role>
              <Role>
                <As>post editor</As>
                <Name>Daniel Komarov</Name>
              </Role>
              <Role>
                <As>color</As>
                <Name>Mikhail Denisov</Name>
              </Role>
              <Role>
                <As>sound</As>
                <Name>Artem Shtern</Name>
              </Role>
              <Role>
                <As>ai</As>
                <Name>Olga Barabanova</Name>
              </Role>
              <Role>
                <As>vfx lead</As>
                <Name>Alexey Garny</Name>
              </Role>
              <Role>
                <As>vfx</As>
                <Name>Maxim Yasinsky</Name>
              </Role>
              <Role>
                <As>comp</As>
                <Name>Alexandr Hirschbein</Name>
              </Role>
              <Role>
                <As>bg artists</As>
                <Name>Mikhail Miroshnichenko, Alexey Vorontsov</Name>
              </Role>
              <Role>
                <As>cgi</As>
                <Name>Mikhail Semenov</Name>
              </Role>
              <Role>
                <As>titles</As>
                <Name>Acid Topser, Maxim Yasinsky</Name>
              </Role>
            </Roles>
            <Icon src="/mpaa-g.png" alt="mpaa" />
          </Info>
        </>
      )}

      <ReactPlayer
        ref={playerRef}
        url="https://vimeo.com/1098983331"
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
