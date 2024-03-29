"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import StylishComponent from "./StylishComponent";
import { Container, ContentGrid, ImageBorder, LeftCol, PortraitWrapper, RightCol, TitleContainer } from "./styled";

const WhoIsA = () => {
    const textArrRef = useRef([
        "The hero of the story is between two poles. His parents carefully protected him from the rough and angular world, but this only delayed his confrontation with reality. When their house burned down under mysterious circumstances, A. was forced to face the world around him in full. At the age of 9, his upbringing was continued by his aunt, his sister on his father’s side.  She was not yellow, she treated them with contempt. There was no exit. Growing up was hard. The balance was fragile.",
        "A. serves as a telescope into reality. He learns and tries to accept the fluctuations of reality. The hero has to learn to accept losses. Home in the local sense, home in the global sense. He is haunted by an identity crisis, pressure from outside and from within.",
        "“Do I have a place in this world?” - the question that every yellow person asked himself. They are sensitive and observant. Yellows are sent to Earth to create. They are forced to wedge themselves into the dystopian dynamics of the world, where the soil for conflict and destruction is the most fertile. One day they were misunderstood by people. Yellow inventors were considered upstarts, artists - abstract rogues, musicians - mediocre fools. Within one generation, the yellows did not find a common language with people, with rare exceptions. These exceptions keep hope alive to this day. In the future, people often turned to the developments of the yellow ones from the past.",
    ])

    const widthRef = useRef(0)

    useEffect(() => {
        widthRef.current = window.innerWidth
    }, [])

    return (
        <Container>
            <TitleContainer src="/who is a.png"/>
            <ContentGrid>
                <LeftCol>
                    <p>
                        {textArrRef.current[0]}
                    </p>
                    <PortraitWrapper style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
                        <ImageBorder>
                            <img src="whoisa/1.jpg" />
                        </ImageBorder>
                        <span style={{color: "#E3D641", fontSize: "36px"}}>A.</span>
                    </PortraitWrapper>
                    <p>
                    {widthRef.current < 500 ? textArrRef.current[2] : textArrRef.current[1]}
                    </p>
                </LeftCol>
                <RightCol>
                    <p>
                    {widthRef.current < 500 ? textArrRef.current[1] : textArrRef.current[2]} 
                    </p>
                    <StylishComponent/>
                </RightCol>
            </ContentGrid>
        </Container>
    )
}

export default WhoIsA;