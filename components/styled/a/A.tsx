import styled from "styled-components";

const A = styled.a`
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 80%;

  @media (min-width: 544px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 992px) {
    width: 35%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export default A;
