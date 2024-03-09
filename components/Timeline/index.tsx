"use client";

import TimelinePath from "@/components/Timeline/TimelinePath";
import {CardWrapper, ImageContainer, TextContainer, Title} from "@/components/Timeline/styled";
import {filmCardsMock} from "@/mocks/timeline";
import {useState} from "react";

const Timeline = () => {
    const [selected, setSelected] = useState(0)

    return(
        <>
            <Title src="/chromnesia.png"/>
            <TimelinePath
                ticksCount={filmCardsMock.length}
                defaultSelected={0}
                setSelected={setSelected}
            />
            <CardWrapper>
                <ImageContainer>
                    <img src={filmCardsMock[selected].img}/>
                </ImageContainer>
                <TextContainer>
                    {filmCardsMock[selected].text}
                </TextContainer>
            </CardWrapper>

        </>
    )
}

export default Timeline