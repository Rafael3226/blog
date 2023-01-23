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
const ItemList = styled.a`
  float: left;
  display: block;
  padding: 8px;
  background-color: #dddddd;
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
          <ItemList><Link href="/">RUS.DEV</Link></ItemList>
          <ItemList><Link href="/">Home</Link></ItemList>
          <ItemList><Link href="/resume">Resume</Link></ItemList>
          <ItemList><Link href="/blog">Blog</Link></ItemList>
          <ItemList><Link href="/portfolio">Portfolio</Link></ItemList>
        </NavList>
    </Nav>
  );
}
