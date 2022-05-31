import styled from 'styled-components';

export const ProjectContainer = styled.div`
  max-width: 32rem;
  background: #25282c;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    transform-origin: 65% 75%;
    transition: transform 0.3s, filter 0.5s ease-out;
  }
  img:hover {
    /* transform: scale(1.1); */
  }
  &:hover {
    cursor: pointer;
    box-shadow: rgb(93, 93, 255) 0px 0px 14px;
  }
`;

export const Container = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  h3 {
    color: #ebf1f5;
    font-size: 16px;
    line-height: 30px;
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

function getRandomColors(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}
const array = ['rgb(93, 93, 255)', 'red', 'green'];
export const Pill = styled.span`
  display: inline-flex;
  background: ${getRandomColors(array)};
  /* background: ${Math.random('rgb(93, 93, 255)', 'red')}; */
  padding: 4px 12px;
  font-size: 1.4rem;
  color: #ebf1f5;
  border-radius: 0.5rem;
`;

export const PillContainer = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-bottom: 8px;
`;
