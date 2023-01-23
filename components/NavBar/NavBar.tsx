import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  font-family: sans-serif;
`;
const NavList = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`
const StyledLink = styled(Link)`
  float: left;
  display: block;
  padding: 8px;
  background-color: #DDD;
  color: white;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`
export default function NavBar() {
  return (
    <Nav>
        <NavList>
          <StyledLink href="/">RUS.DEV</StyledLink>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/resume">Resume</StyledLink>
          <StyledLink href="/blog">Blog</StyledLink>
          <StyledLink href="/portfolio">Portfolio</StyledLink>
        </NavList>
    </Nav>
  );
}
