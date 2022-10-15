import styled from "styled-components";

export const Underlined = styled.button`
  border: none;
  color: #ebf1f5;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;

  background: var(--color-subtle-floating);

  line-height: 27px;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  &:hover {
    font-family: inherit;
    background: var(--color-primary);
  }
  i {
    color: #ebf1f5;
    margin-left: 1rem;
  }
`;
