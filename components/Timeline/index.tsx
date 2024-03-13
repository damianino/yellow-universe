"use client";

import TimelinePath from "@/components/Timeline/TimelinePath";
import {CardWrapper, ImageContainer, TextContainer, Title, TitleImg} from "@/components/Timeline/styled";
import {filmCardsMock} from "@/mocks/timeline";
import {useState} from "react";

const Timeline = () => {
    const [selected, setSelected] = useState(0)

    return(
        <>
           {filmCardsMock[selected].titleImg != "" ? 
           <TitleImg src={filmCardsMock[selected].titleImg}/> :
           <Title>{filmCardsMock[selected].name}</Title>}
            <TimelinePath
                ticksCount={filmCardsMock.length}
                defaultSelected={0}
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
                </TextContainer>
            </CardWrapper>
        </>
    )
}

export default Timeline