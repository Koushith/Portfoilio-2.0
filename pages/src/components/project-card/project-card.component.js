import { Container, ProjectContainer, Description, Pill, PillContainer } from './project-card.component.styles';

export const ProjectCard = () => {
  return (
    <ProjectContainer>
      <img src='/news-02.jpg' alt='projectImage' />
      <Container>
        <Description>
          <PillContainer>
            <Pill>Design</Pill>
            <Pill>Frontend</Pill>
          </PillContainer>
          <h3>EthDenver2022- A non custodial Wallet application</h3>
        </Description>
      </Container>
    </ProjectContainer>
  );
};
