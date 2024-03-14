"use client"

import {Container, Wrapper} from "@/components/Footer/styled";

const Footer = () => {

    return(
        <Container>
            <Wrapper>
                <img onClick={() => window.location.assign("https://www.instagram.com/acidtopser/")} src="written.png"/>
                <img onClick={() => window.location.assign("https://www.instagram.com/loadloudco/")} src="produced.png"/>
            </Wrapper>
         </Container>
    )
}

export default Footer;