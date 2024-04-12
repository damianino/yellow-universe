"use client";

import TimelinePath from "@/components/Timeline/TimelinePath";
import {CardWrapper, Credits, CreditsBtn, ImageContainer, TextContainer, Title, TitleImg} from "@/components/Timeline/styled";
import useTextRandomFadeIn from "@/hooks/sfx/textRandomFadein";
import {filmCardsMock} from "@/mocks/timeline";
import {useRef, useState} from "react";
import Modal from 'react-modal';

const defaultSelected = 8

const modalStyle = {
    content: {
    backgroundColor: "black",
    color: "white",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: "center"
    },
    overlay: {
        backgroundColor: "#000000c3",
    }
  };

const Timeline = () => {
    const textContainerRef = useRef(null)
    // const text = useTextRandomFadeIn(textContainerRef)

    const [selected, setSelected] = useState(filmCardsMock.length - defaultSelected - 1 )
    const [modalOpen, setModalOpen] = useState(false)

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
                    (<img src={filmCardsMock[selected].img}/>) :
                    (<span>?</span>)}
                </ImageContainer>
                <TextContainer>
                {filmCardsMock[selected].available ? 
                    filmCardsMock[selected].text :
                    "Coming soon..."}
                    {filmCardsMock[selected].available ? 
                    <div style={{marginTop: "20px"}}>
                <CreditsBtn onClick={() => setModalOpen(true)}>
                    CREDITS
                </CreditsBtn></div> : null}
                </TextContainer>
                
            </CardWrapper>
            <Modal
                isOpen={modalOpen}
                // @ts-ignore
                style={modalStyle}
                contentLabel="Example Modal"
                onRequestClose={() => setModalOpen(false)}
            >
                <Credits ref={textContainerRef}>
                    {filmCardsMock[selected].credits}
                </Credits>
            </Modal>
        </>
    )
}

export default Timeline