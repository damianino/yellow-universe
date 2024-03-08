"use client"

import {Container, Wrapper} from "@/components/Footer/styled";

const Footer = () => {

    return(
        <Container>
            <Wrapper>
                <span>
                    Written by <a href="#">Acid Topser</a>
                </span>
                <span>
                    Directed by <a href="#">loadloud</a>
                </span>
            </Wrapper>
         </Container>
    )
}

export default Footer;