import styled from 'styled-components';

export const Underlined = styled.button`
  border: none;
  color: #ebf1f5;
  font-size: 1.8rem;
  font-weight: 500;
  /* border-bottom: 2px solid rgb(93, 93, 255); */
  background: #25282c;
  /* background: transparent; */
  line-height: 27px;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  &:hover {
    background: rgb(93, 93, 255);
  }
  i {
    color: #ebf1f5;
    margin-left: 1rem;
  }
`;
