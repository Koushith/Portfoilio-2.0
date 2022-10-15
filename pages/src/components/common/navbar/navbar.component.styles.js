import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 8rem;
  padding: 2rem;
  position: sticky;
  top: 0;
  background: var(--color-background);
  transition: background 350ms ease 0s;
`;

export const NavbarContainer = styled.nav`
  max-width: 86rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  h2 {
    display: flex;
    font-size: 24px;
    letter-spacing: -1px;
    padding: 0px;
    text-decoration: none;
    color: var(--color-primary);
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  li {
    font-size: 1.6rem !important;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 400 !important;
  }
  li:hover {
    color: #5d5dff;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-text);
    font-weight: var(--font-weight-medium);

    border-bottom: 2px solid #5d5dff;
    transition: 0.2s ease;
  }
  .active {
    color: var(--color-primary);
    cursor: pointer;
    font-weight: 500 !important;
    border-bottom: 2px solid #5d5dff;
    transition: 0.2s ease;
  }
`;
