import { Container } from '../common/container/container.component';
import {
  HackathonSectionContainer,
  ProjectsContainer,
  Button,
  ShowAllContainer,
} from './hackathon-section.component.styles';
import { Projects } from './projects/hackathon-project.component';

export const HackathonSection = () => {
  return (
    <HackathonSectionContainer>
      <Container>
        <h2>Hackathon and Hobby Projects</h2>
        <ProjectsContainer>
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <ShowAllContainer>
            <Button>See All Projects</Button>
          </ShowAllContainer>
        </ProjectsContainer>
      </Container>
    </HackathonSectionContainer>
  );
};
