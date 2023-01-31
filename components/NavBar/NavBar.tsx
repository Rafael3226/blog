import styled from "styled-components";
import Link from "next/link";

const StyledNav = styled.nav`
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  background-color: rgb(0, 0, 0, 0.3);
`;
const StyledLink = styled(Link)`
  float: left;
  display: block;
  padding: 20px;
  width: 10vw;
  color: white;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
    font-size: 1.2rem;
  }
`;

const Logo = styled.span`
  font-weight: bold;
`

const routes = [
  { href: "/", text: "Home" },
  { href: "/resume", text: "Resume" },
  { href: "/blog", text: "Blog" },
  { href: "/portfolio", text: "Portfolio" },
];

export default function NavBar() {
  return (
    <StyledNav>
      <StyledLink href="/"><Logo>RUS.DEV</Logo></StyledLink>
      {routes.map(({ href, text }) => (
        <StyledLink href={href}>{text}</StyledLink>
      ))}
    </StyledNav>
  );
}
