import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
