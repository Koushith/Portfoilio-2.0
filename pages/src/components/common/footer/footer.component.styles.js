import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 5rem 0;
`;

export const Navs = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #9ba9b4;
  padding: 8rem 0 4rem 0;
`;

export const StyledDiv = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: #d9e3ea;
  }
  ul {
    margin: 2rem 0;
  }

  li {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: #9ba9b4;
    margin: 1rem 0;
  }
  li:hover {
    color: #5d5dff;
    cursor: pointer;
  }
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #5d5dff;
    cursor: pointer;
  }
`;
