import styled from 'styled-components';

export const ProjectContainer = styled.section`
  margin: 4rem auto;
`;

export const ActionsContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;

  .action-btn {
    border: none;
    background: none;
    color: #d9e3ea;
    font-size: 1.8rem;
    cursor: pointer;
  }
  i {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const DetailsContainer = styled.div`
  .project-title {
    font-size: 2.6rem;
    color: #d9e3ea;
  }
  .pill-container {
    margin-top: 1.2rem;
    display: flex;
    gap: 1rem;
  }
  .description {
    margin: 3rem auto 1.4rem auto;
  }

  .action-buttons {
    margin: 4rem auto;
    justify-content: space-between;
  }
`;

export const TechStackContainer = styled.ul`
  h3 {
    font-size: 2rem;
    color: #d9e3ea;
    margin-bottom: 0.8rem;
  }

  li {
    list-style: square;
    margin-left: 2rem;
  }
`;
