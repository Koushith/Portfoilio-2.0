import { Container } from '../common/container/container.component';
import { HackathonSectionContainer, ProjectsContainer } from './hackathon-section.component.styles';
import { Projects } from './projects/hackathon-project.component';

export const HackathonSection = () => {
  return (
    <HackathonSectionContainer>
      <Container>
        <h2>Hackathon and Open Source Projects</h2>
        <ProjectsContainer>
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </ProjectsContainer>
      </Container>
    </HackathonSectionContainer>
  );
};
