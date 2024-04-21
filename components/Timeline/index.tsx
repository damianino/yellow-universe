"use client";

import TimelinePath from "@/components/Timeline/TimelinePath";
import {CardWrapper, Credits, CreditsBtn, ImageContainer, TextContainer, Title, TitleImg} from "@/components/Timeline/styled";
import {filmCardsMock} from "@/mocks/timeline";
import {useRef, useState} from "react";
import FadeText from "../FadeText";

import "./style.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


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
                {filmCardsMock[selected].available ? 
                    (<>
                    <Swiper
                    className="customSwiper"
                    modules={[Navigation]}
                    loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000
                        }}
                    navigation={{
                        nextEl: '.arrowR',
                        prevEl: '.arrowL',
                    }}
                    >
                        {filmCardsMock[selected].img.map((src) => (
                            <SwiperSlide>
                                <img style={{cursor: "pointer"}} className="openableImg" width={"100%"} src={src}/>
                            </SwiperSlide>
                            )
                            ) 
                            }
                    </Swiper>
                    <div style={{    
                        display: "flex",
                        justifyContent: "space-between",
                        width: "350px",
                        position: "absolute",
                        zIndex: "1",
                        top: "223px"}}>
                        <img style={{cursor: "pointer"}} className="arrowL" src="arrow-l.png" width={76}/>
                        <img style={{cursor: "pointer"}} className="arrowR" src="arrow-r.png" width={84}/>
                    </div>
                    </>) :
                        (<div style={{height: "330px", width: "330px", display: "flex", alignItems: "center", justifyContent: "center"}}><span>?</span></div>) }
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