"use client";

import TimelinePath from "@/components/Timeline/TimelinePath";
import {CardWrapper, Credits, CreditsBtn, ImageContainer, TextContainer, Title, TitleImg} from "@/components/Timeline/styled";
import {filmCardsMock} from "@/mocks/timeline";
import {useRef, useState} from "react";
import FadeText from "../FadeText";

import "./style.css"
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Modal from "../Modal";

const defaultSelected = 8

const Timeline = () => {
    const [selected, setSelected] = useState(filmCardsMock.length - defaultSelected - 1 )
    const [modalOpen, setModalOpen] = useState(false)
    const [creditsTextVisible, setCreditsTextVisible] = useState(false)

    return(
        <>
           {filmCardsMock[selected].titleImg != "" ? 
           <TitleImg src={filmCardsMock[selected].titleImg}/> :
           <Title>{filmCardsMock[selected].name}</Title>}
            <TimelinePath
                ticksCount={filmCardsMock.length}
                defaultSelected={defaultSelected}
                setSelected={setSelected}
            />
            <CardWrapper>
                <ImageContainer>
                <Swiper
                loop={true}
                    slidesPerView={1}
                    style={{margin: "0"}}
                    autoplay={{
                        delay: 3000
                    }}
                >
                    {filmCardsMock[selected].available ? 
                    filmCardsMock[selected].img.map((src) => (
                        <SwiperSlide>
                            <img width={"100%"} src={src}/>
                        </SwiperSlide>
                        )
                        ) :
                    (<span>?</span>)}
                </Swiper>
                    
                </ImageContainer>
                <TextContainer>
                {filmCardsMock[selected].available ? 
                    filmCardsMock[selected].text :
                    "Coming soon..."}
                    {filmCardsMock[selected].available ? 
                    <div style={{marginTop: "20px"}}>
                <CreditsBtn onClick={() => {
                    setModalOpen(true)
                    setCreditsTextVisible(true)
                }}>
                    CREDITS
                </CreditsBtn></div> : null}
                </TextContainer>
                
            </CardWrapper>
            <Modal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false)
                    setCreditsTextVisible(false)
                }}
            >   
                <FadeText text={filmCardsMock[selected].credits || ""} visible={creditsTextVisible}/>
            </Modal>
        </>
    )
}

export default Timeline