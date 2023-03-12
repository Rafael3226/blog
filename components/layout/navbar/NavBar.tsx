import Link from "./Link";
import Nav from "./Nav";
import { ReactElement } from "react";
import styled from "styled-components";
import Logo from "components/assets/svg/Logo";

interface Route {
  href: string;
  children: ReactElement | string;
  show: Boolean;
}

const routesList: Route[] = [
  { href: "/blog", children: "Blog", show: false },
  { href: "/resume", children: "Resume", show: false },
  { href: "/portfolio", children: "Portfolio", show: true },
];

const LinkList = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function NavBar() {
  return (
    <Nav>
      <Link href="/">
        <Logo width="100px" height="50px" />
      </Link>
      <LinkList>
        {routesList.map(
          ({ show, href, children }: Route, i: number) =>
            show && (
              <Link key={i} href={href}>
                {children}
              </Link>
            )
        )}
      </LinkList>
    </Nav>
  );
}
