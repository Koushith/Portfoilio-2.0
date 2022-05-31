import React from 'react';
import styled from 'styled-components';
import { Button } from '../src/components/blog-section/blog-section.component.styles';
import { Pill } from '../src/components/pill/pill.component';
// import { Pill } from '../src/components/project-card/project-card.component.styles';
import { ActionsContainer, ProjectContainer, DetailsContainer, TechStackContainer } from './project-detail.styles';

function ProjectDetail() {
  return (
    <ProjectContainer>
      <img
        src={'https://abhagsain.com/static/b92c283576c86d4be325a4dbffa891a3/99238/coingaze.webp'}
        alt='project-img'
      />
      <ActionsContainer>
        <Button>Live Project</Button>
        <Button>Source Code</Button>
        <Button>Live Stream</Button>
      </ActionsContainer>
      <DetailsContainer>
        <h3 className='project-title'>Safient</h3>
        <p className='project-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className='pill-container'>
          <Pill color='1'>Design</Pill>
          <Pill color='2'>Frontend</Pill>
          <Pill color='3'>Frontend</Pill>
          <Pill color='4'>Frontend</Pill>
          <Pill color='5'>Frontend</Pill>
          <Pill color='6' pointer>
            Frontend
          </Pill>
          <Pill color='7' pointer>
            fdgsdf
          </Pill>
        </div>

        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error obcaecati, porro facere distinctio
          ratione ipsum similique quod recusandae. Praesentium aliquam accusamus animi aperiam perspiciatis, perferendis
          saepe deserunt minus ab.
        </p>

        <TechStackContainer>
          <h3>Tech Stacks</h3>
          <li>React/NextJS</li>
          <li>Styled Components/ Pure VanilaCSS</li>
          <li>Node/Express</li>
        </TechStackContainer>

        <ActionsContainer className='action-buttons'>
          <button className='action-btn '>Previous Project</button>
          <button className='action-btn '> Next Project</button>
        </ActionsContainer>
      </DetailsContainer>
    </ProjectContainer>
  );
}

export default ProjectDetail;
