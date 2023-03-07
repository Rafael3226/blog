import Logo from "components/assets/svg/logo/Logo";
import Link from "./Link";
import Nav from "./Nav";
import { ReactElement } from "react";

interface Route {
  href: string;
  children: ReactElement | string;
  show: Boolean;
}

const routesList: Route[] = [
  { href: "/", children: <Logo width={"100px"} height={"50px"} />, show: true },
  { href: "/blog", children: "Blog", show: false },
  { href: "/resume", children: "Resume", show: true },
  { href: "/portfolio", children: "Portfolio", show: false },
];

export default function NavBar() {
  return (
    <Nav>
      {routesList.map(
        ({ show, href, children }: Route, i: number) =>
          show && (
            <Link key={i} href={href}>
              {children}
            </Link>
          )
      )}
    </Nav>
  );
}
