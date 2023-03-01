import styled from "styled-components";

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #111;
  color: #ddd;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

function Footer() {
  return <FooterDiv>Copyright &copy; Rafael Uribe 2023</FooterDiv>;
}

export default Footer;
