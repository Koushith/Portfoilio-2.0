import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './src/components/project-card/project-card.component';

const ProjectsPageContainer = styled.section`
  margin: 2rem 0;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;

function Projects() {
  return (
    <ProjectsPageContainer>
      <h2>All Hobby Projects</h2>

      <ProjectsContainer>
        <ProjectCard />

        <ProjectCard />

        <ProjectCard />

        <ProjectCard />

        <ProjectCard />

        <ProjectCard />
      </ProjectsContainer>
    </ProjectsPageContainer>
  );
}

export default Projects;
