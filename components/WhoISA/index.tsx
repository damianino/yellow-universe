"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Container,
  ContentGrid,
  ImageBorder,
  LeftCol,
  PortraitWrapper,
  RightCol,
  TitleContainer,
} from "./styled";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
// @ts-ignore
import { EffectCards } from "swiper/modules";
import Slider from "@/components/Modal/Slider";
import { filmCardsMock } from "@/mocks/timeline";
import { useModal } from "@/hooks/useModal";

const WhoIsA = () => {
  const { modal, openModal } = useModal();

  const textArrRef = useRef([
    "The protagonist of the story stands between two poles. His parents carefully protected him from the rough and angular world, but this only delayed his confrontation with reality. When their house burned down under mysterious circumstances, A. was forced to face the world around him in full. At the age of 9, his upbringing was continued by his aunt, from his father’s side. She was not Yellow, she treated them with contempt. There was no exit. Growing up was hard. The balance was fragile.",
    "A. serves as a telescope into reality. He learns and tries to accept the fluctuations of reality. The protagonist has to learn to accept losses. Home in the local sense, home in the global sense. He is haunted by an identity crisis, pressure from outside and from within.",
    "Later, the already matured protagonist is faced with the forced expulsion of the Yellow ones from his native land. He loses touch with his first love. Accustomed to nomadism, the hero experiences a forced separation from his native place, setting off on a journey not of his own free will. He only gradually realizes the longing for his native place and the past. Since those carefree walks with his mother through the forest, the clouds have only thickened. The way home is closed. He, an eternal renegade, will have to adapt to a new place. This is the story of his first interaction with the new reality after devastating deportation. This is the beginning of a “make you or break you” experience.",
  ]);

  const widthRef = useRef(0);

  useEffect(() => {
    widthRef.current = window.innerWidth;
  }, []);

  return (
    <Container>
      <TitleContainer src="/who is a.png" />
      <ContentGrid>
        <LeftCol>
          <p>{textArrRef.current[0]}</p>

          <img   src="whoisa/1.jpg" />
          <p>
            {widthRef.current < 500
              ? textArrRef.current[2]
              : textArrRef.current[1]}
          </p>
        </LeftCol>
        <RightCol>
          <p>
            {widthRef.current < 500
              ? textArrRef.current[1]
              : textArrRef.current[2]}
          </p>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            loop={true}
            style={{
              width: "240px",
              height: "320px",
            }}
          >
            {Array(6)
              .fill(0)
              .map((e, i) => (
                <SwiperSlide key={i}>
                  <img  
                    style={{ cursor: "pointer" }}
                    src={`whoisa/carousel/${i + 1}.jpeg`}
                    onClick={() =>
                      openModal(
                        <Slider
                          children={Array(6)
                            .fill(0)
                            .map((e, i) => (
                              <img  
                                key={i}
                                width={"100%"}
                                src={`whoisa/carousel/${i + 1}.jpeg`}
                              />
                            ))}
                        />,
                        () => {}
                      )
                    }
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </RightCol>
      </ContentGrid>
      {modal}
    </Container>
  );
};

export default WhoIsA;
