"use client"

import {Container, ScrollDownContainer, SubTitle, Title} from "@/components/Header/styled";

const  Header = () => {

    return (
        <Container>
            <div>
                <Title src="/welcome chrome website copy.png"/>
                {/* <SubTitle>
                    a mixed media narrative
                </SubTitle> */}
            </div>
            {/* <ScrollDownContainer>
                <div>SCROLL DOWN TO UNDERSTAND THE MOVIE<br/></div>
            </ScrollDownContainer> */}
        </Container>
    )
}

export default Header;