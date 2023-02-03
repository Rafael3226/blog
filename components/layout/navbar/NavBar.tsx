import styled from "styled-components";
import Link from "next/link";
import Logo from "../../assets/svg/logo/Logo";
import { ReactElement } from "react";

const StyledNav = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  width: 25%;
  color: white;

  text-decoration: none;

  &:hover {
    font-size: 1.1rem;
  }
`;

interface Route {
  href: string;
  children: ReactElement | string;
  show: Boolean;
}

const routesList: Route[] = [
  { href: "/", children: <Logo width={"100px"} height={"50px"} />, show: true },
  { href: "/blog", children: "Blog", show: true },
  { href: "/resume", children: "Resume", show: true },
  { href: "/portfolio", children: "Portfolio", show: true },
];

export default function NavBar() {
  return (
    <StyledNav>
      {routesList.map(
        ({ show, href, children }: Route, i: number) =>
          show && (
            <StyledLink key={i} href={href}>
              {children}
            </StyledLink>
          )
      )}
    </StyledNav>
  );
}
