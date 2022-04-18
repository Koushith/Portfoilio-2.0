import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
