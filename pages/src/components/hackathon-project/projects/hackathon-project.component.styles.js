import styled from 'styled-components';

export const ProjectContainer = styled.div`
  max-width: 30.2rem;
`;

export const Container = styled.div`
  padding: 1rem;

  img {
    width: 100%;

    object-fit: cover;
    transform-origin: 65% 75%;
    transition: transform 0.3s, filter 0.5s ease-out;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

export const Description = styled.div`
  h3 {
    color: #ebf1f5;
    font-size: 20px;
    line-height: 33px;
    weight: 700;
    margin: 8px 0;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: #9ba9b4;
    weight: 400;
  }
`;

export const Pill = styled.span`
  display: inline-flex;
  background: rgb(93, 93, 255);
  /* background: ${Math.random('rgb(93, 93, 255)', 'red')}; */
  padding: 4px 12px;
  font-size: 12px;
  color: #ebf1f5;
  border-radius: 0.5rem;
`;

export const PillContainer = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-bottom: 8px;
`;
