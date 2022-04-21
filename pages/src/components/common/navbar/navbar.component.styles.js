import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 8rem;
  padding: 2rem;
  position: sticky;
  top: 0;
  background: #151719;
`;

export const NavbarContainer = styled.nav`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  h2 {
    color: #d9e3ea;
    font-size: 2rem;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #d9e3ea;
  }
  li {
    /* font-size: 1.8rem; */
  }
  li:hover {
    color: #5d5dff;
    cursor: pointer;

    border-bottom: 2px solid #5d5dff;
    transition: 0.2s ease;
  }
`;
