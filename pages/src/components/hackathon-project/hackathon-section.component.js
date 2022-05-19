import { Container } from '../common/container/container.component';
import {
  HackathonSectionContainer,
  ProjectsContainer,
  Button,
  ShowAllContainer,
} from './hackathon-section.component.styles';
import { ProjectCard } from '../project-card/project-card.component';
import { useRouter } from 'next/router';

export const HackathonSection = () => {
  const router = useRouter();
  return (
    <HackathonSectionContainer>
      <Container>
        <h2>Hackathon and Hobby Projects</h2>
        <ProjectsContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ShowAllContainer>
            <Button onClick={() => router.push('/projects')}>See All Projects</Button>
          </ShowAllContainer>
        </ProjectsContainer>
      </Container>
    </HackathonSectionContainer>
  );
};
