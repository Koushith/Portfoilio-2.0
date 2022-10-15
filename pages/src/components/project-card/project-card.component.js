import { Pill } from "../pill/pill.component";
import {
  Container,
  ProjectContainer,
  Description,
  PillContainer,
} from "./project-card.component.styles";

export const ProjectCard = () => {
  return (
    <ProjectContainer>
      <img
        src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="projectImage"
      />
      <Container>
        <Description>
          <PillContainer>
            <Pill color="1">Design</Pill>
            <Pill color="2">Frontend</Pill>
          </PillContainer>
          <h3>EthDenver2022- A non custodial Wallet application</h3>
        </Description>
      </Container>
    </ProjectContainer>
  );
};
