import { ReactElement } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  container-type: inline-size;
  container-name: main;
`;

function Container({ children }: { children: ReactElement }) {
  return <StyledDiv>{children}</StyledDiv>;
}


export default Container;