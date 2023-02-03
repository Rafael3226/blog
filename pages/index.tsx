import styled from "styled-components";
import Icon from "../components/assets/svg/icon/Icon";

const CenterDiv = styled.div`
  display: grid;
  place-items: center;
`;

export default function Home() {
  return (
    <CenterDiv>
      <h1>HOME</h1>
      <Icon width="500px" height="500px"/>
    </CenterDiv>
  );
}
