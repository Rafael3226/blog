import styled from "styled-components";

const CenterDiv = styled.div`
  display: grid;
  place-items: center;
`;

export default function Home() {
  return (
    <CenterDiv>
      <h1 style={{ backgroundColor: "blue"}}>Home</h1>
    </CenterDiv>
  );
}
