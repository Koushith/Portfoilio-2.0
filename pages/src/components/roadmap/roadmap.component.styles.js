import styled from 'styled-components';

export const RoadMapContainer = styled.section`
  border-radius: 0.5rem;
  @media (max-width: 57.6rem) {
    margin: 0 1rem;
  }
`;

export const RoadMaps = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #25282c;
  padding: 4rem;
  gap: 4rem;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px #5d5dff;
  }
`;

export const YearContainer = styled.div`
  align-self: auto;
  p {
    color: #d9e3ea;
    font-weight: 500;
    text-align: center;
  }
`;

export const Description = styled.div`
  max-width: 78rem;
  h4 {
    color: #d9e3ea;
    font-weight: 500;
  }
  .details {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const TimeFrameContainer = styled.div`
  margin-bottom: 8rem;
  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }
  li {
    list-style: square;
  }
`;
