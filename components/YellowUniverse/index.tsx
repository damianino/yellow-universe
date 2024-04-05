"use client"

import { useSchema } from "sanity";
import { Container } from "./styled";
import { useEffect, useRef, useState } from "react";

const YellowUniverse = () => {
    return (
        <Container>
            <img src="/eye_l.jpg"/>
            <p>
            “Do I have a place in this world?” - the question that every yellow person asked himself. They are sensitive and observant. Yellows are sent to Earth to create. They are forced to wedge themselves into the dystopian dynamics of the world, where the soil for conflict and destruction is the most fertile. One day they were misunderstood by people. Yellow inventors were considered upstarts, artists - abstract rogues, musicians - mediocre fools. Within one generation, the yellows did not find a common language with people, with rare exceptions. These exceptions keep hope alive to this day. In the future, people often turned to the developments of the yellow ones from the past. The conflict could not pass without a trace, without leaving scars on the yellow ones. Among them were those who became disillusioned with society and the idea of creation, turning to the path of destruction. The creeping madness has not touched their ingenuity, keen intelligence and sensitivity to reality. This is how the world got the most sophisticated serial killers, financial schemers and brutal rapists.
            </p>
            <img src="/eye_r.jpg"/>
        </Container>
    )
}

export default YellowUniverse;