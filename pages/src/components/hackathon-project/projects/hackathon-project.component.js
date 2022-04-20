import { Container, ProjectContainer, Description, Pill, PillContainer } from './hackathon-project.component.styles';

export const Project = () => {
  return (
    <ProjectContainer>
      <Container>
        <img src='/news-02.jpg' alt='projectImage' />

        <Description>
          <PillContainer>
            <Pill>Design</Pill>
            <Pill>Frontend</Pill>
          </PillContainer>
          <h3>EthDenver2022- A non custodial Wallet application</h3>
          <p>Lorem, ipsum dolor sit sit amet consectetur sit amet consectetur adipisicing elit.</p>
        </Description>
      </Container>
    </ProjectContainer>
  );
};
