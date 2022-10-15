import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderContainer, NavbarContainer } from "./navbar.component.styles";

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <NavbarContainer>
        <h2>
          <Link href="/">Koushith </Link>
        </h2>

        <ul>
          <li className={pathname === "/about" && "active"}>
            <Link href="/about">About</Link>
          </li>

          <li className={pathname === "/projects" && "active"}>
            <Link href="/projects">Projects</Link>
          </li>

          <li className={pathname === "/blogs" && "active"}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={pathname === "/download" && "active"}>
            <Link href="/download">Download Resume</Link>
          </li>
        </ul>
      </NavbarContainer>
    </HeaderContainer>
  );
};
