"use client";

import TimelinePath from "@/components/Timeline/TimelinePath";
import {
  ArrowContainer,
  CardWrapper,
  Credits,
  CreditsBtn,
  ImageContainer,
  SliderContainer,
  TextContainer,
  Title,
  TitleImg,
} from "@/components/Timeline/styled";
import { filmCardsMock } from "@/mocks/timeline";
import { useRef, useState } from "react";
import FadeText from "../FadeText";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Modal from "../Modal";
import { useModal } from "@/hooks/useModal";
import Slider from "@/components/Modal/Slider";

const defaultSelected = 8;

const Timeline = () => {
  const { modal, openModal } = useModal();

  const [selected, setSelected] = useState(
    filmCardsMock.length - defaultSelected - 1
  );

  return (
    <>
      {filmCardsMock[selected].titleImg != "" ? (
        <TitleImg src={filmCardsMock[selected].titleImg} />
      ) : (
        <Title>{filmCardsMock[selected].name}</Title>
      )}
      <TimelinePath
        ticksCount={filmCardsMock.length}
        defaultSelected={defaultSelected}
        setSelected={setSelected}
      />
      <CardWrapper>
        <ImageContainer>
          {filmCardsMock[selected].available ? (
            <SliderContainer>
              <Swiper
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                }}
                navigation={{
                  nextEl: ".arrowR",
                  prevEl: ".arrowL",
                }}
                style={{
                  width: "240px",
                  height: "320px",
                }}
              >
                {filmCardsMock[selected].img.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      style={{ cursor: "pointer" }}
                      width={"100%"}
                      src={src}
                      onClick={() => {
                        openModal(
                          <Slider
                            children={filmCardsMock[selected].img.map(
                              (src, i) => (
                                <img key={i} width={"100%"} src={src} />
                              )
                            )}
                          />,
                          () => {}
                        );
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <ArrowContainer>
                <img
                  style={{ cursor: "pointer" }}
                  className="arrowL"
                  src="arrow-l.png"
                  width={76}
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="arrowR"
                  src="arrow-r.png"
                  width={84}
                />
              </ArrowContainer>
            </SliderContainer>
          ) : (
            <div
              style={{
                height: "330px",
                width: "330px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>?</span>
            </div>
          )}
        </ImageContainer>
        <TextContainer>
          {filmCardsMock[selected].available
            ? filmCardsMock[selected].text
            : "Coming soon..."}
          {filmCardsMock[selected].available ? (
            <div style={{ marginTop: "20px" }}>
              <CreditsBtn
                onClick={() => {
                  openModal(
                    <FadeText
                      text={filmCardsMock[selected].credits || ""}
                      visible={true}
                    />,
                    () => {},
                    { width: "60%" }
                  );
                }}
              >
                CREDITS
              </CreditsBtn>
            </div>
          ) : null}
        </TextContainer>
      </CardWrapper>

      {modal}
      {/*<Modal*/}
      {/*    isOpen={modalOpen}*/}
      {/*    onClose={() => {*/}
      {/*        setModalOpen(false)*/}
      {/*        setCreditsTextVisible(false)*/}
      {/*    }}*/}
      {/*>*/}
      {/*    <FadeText text={filmCardsMock[selected].credits || ""} visible={creditsTextVisible}/>*/}
      {/*</Modal>*/}
    </>
  );
};

export default Timeline;
