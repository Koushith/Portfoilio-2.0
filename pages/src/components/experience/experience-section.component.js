import { Container } from '../common/container/container.component';
import { Description, ExperienceContainer, StyledDiv, Company } from './experience-section.component.styles';

export const WorkExperience = () => {
  return (
    <ExperienceContainer>
      <Container>
        <h2>Career Path</h2>
        <StyledDiv>
          <Company>
            <p>June 2020 - Present</p>{' '}
            <Description>
              <h3>Consenso Labs- Frontend & UI/UX.</h3>{' '}
              <p>
                Leading the Design and Frontend Engineering of the platform as a sole Front-end Engineer. Worked
                extensively on designing UI, prototyping, and architecting the application.
              </p>
              <p>Leveraging Web3 technology to build MVPs for various use cases on multiple Blockchain Platforms.</p>
            </Description>
          </Company>
          <Company>
            <p>May 2019 - June 2020</p>
            <Description>
              <h3>Infosys Limited - Associate.</h3>
              <p>Worked on SAP GRC Domain.</p>
            </Description>
          </Company>
        </StyledDiv>
      </Container>
    </ExperienceContainer>
  );
};
