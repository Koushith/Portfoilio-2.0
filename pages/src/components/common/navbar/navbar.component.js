import { HeaderContainer, NavbarContainer } from './navbar.component.styles';

export const Navbar = () => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <h2>Koushith</h2>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Work</li>
          <li>Timeline</li>
          <li>Contact</li>
        </ul>
      </NavbarContainer>
    </HeaderContainer>
  );
};
