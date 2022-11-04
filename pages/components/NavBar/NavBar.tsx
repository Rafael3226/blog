import styled from 'styled-components'

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
          <ItemList href="#">RUS.DEV</ItemList>
          <ItemList>Home</ItemList>
          <ItemList>CV</ItemList>
          <ItemList>Blog</ItemList>
          <ItemList>Portfolio</ItemList>
        </NavList>
    </Nav>
  );
}
