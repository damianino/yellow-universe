"use client"

import {Container, ScrollDownContainer, SubTitle, Title} from "@/components/Header/styled";

const  Header = () => {

    return (
        <Container>
            <div>
                <Title>
                    WELCOME CHROME
                </Title>
                <SubTitle>
                    first mixed media story
                </SubTitle>
            </div>
            <ScrollDownContainer>
                <div>SCROLL DOWN TO UNDERSTAND THE MOVIE<br/></div>
            </ScrollDownContainer>
        </Container>
    )
}

export default Header;