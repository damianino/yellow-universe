import {Container} from "@/components/Artifacts/Artifact/styled";

interface Props{
    name: string
    img: string
}

const Artifact = ({name, img}: Props) => {

    return (
        <Container>
            <img loading="lazy"  src={img}/>
            <div>
                {name}
            </div>
        </Container>
    )
}

export default Artifact