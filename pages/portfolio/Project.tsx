import styled from "styled-components";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000;
  width: 350px;
  height: 560px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 600px;
    height: 580px;
  }
  @media (min-width: 992px) {
    width: 800px;
    height: 600px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export default Project;
