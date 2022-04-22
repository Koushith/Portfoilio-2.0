import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderContainer, NavbarContainer } from './navbar.component.styles';

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <NavbarContainer>
        <h2>Koushith</h2>
        <ul>
          <li className={pathname === '/about' && 'active'}>
            <Link href='/about'>About</Link>
          </li>
          <li>Projects</li>
          <li>Work</li>
          <li>Timeline</li>
          <li>Contact</li>
        </ul>
      </NavbarContainer>
    </HeaderContainer>
  );
};
