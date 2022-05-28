import { Pill } from '../pill/pill.component';
import { Container, ProjectContainer, Description, PillContainer } from './project-card.component.styles';

export const ProjectCard = () => {
  return (
    <ProjectContainer>
      <img src='/news-02.jpg' alt='projectImage' />
      <Container>
        <Description>
          <PillContainer>
            <Pill color='1'>Design</Pill>
            <Pill color='2'>Frontend</Pill>
          </PillContainer>
          <h3>EthDenver2022- A non custodial Wallet application</h3>
        </Description>
      </Container>
    </ProjectContainer>
  );
};
