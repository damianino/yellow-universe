"use client";

import { ArtifactsList, Container, Title } from "@/components/Artifacts/styled";
import Artifact from "@/components/Artifacts/Artifact";
import { ArtifactsMock } from "@/mocks/artifacts";

const Artifacts = () => {
  return (
    <Container>
      <Title src="/artifacts.png" />
      <ArtifactsList>
        {ArtifactsMock.map((i) => (
          <Artifact name={i.name} img={i.img} />
        ))}
      </ArtifactsList>
    </Container>
  );
};

export default Artifacts;
