import styled from "styled-components";

const A = styled.a`
  background-image: linear-gradient(150deg, #451e3e, #651e3e, #851e3e);
  color: #fff;
  border-radius: 25px;
  padding: 4px;
  margin-bottom: 5px;
  text-decoration: none;
  transition: 0.3s;

  width: 80%;
  min-width: 280px;
  max-width: 390px;

  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

export default A;
