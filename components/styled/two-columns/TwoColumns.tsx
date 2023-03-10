import styled from "styled-components";

export const TwoColumns = styled.section`
  min-height: 650px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Column = styled.div`
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 25vh;
  }
`;
