import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3.6rem;
  gap: 2rem;
  li {
    list-style: none;
    display: inline-flex;
  }
  i {
    font-size: 60px;
    cursor: pointer;
  }
  i:hover {
    color: #5d5dff;
  }
`;
