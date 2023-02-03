import styled from "styled-components";

const Circle = styled.span<{ inputColor: string }>`
  height: 250px;
  width: 250px;
  background-color: ${(props) => props.inputColor || "#FFF"};
  border-radius: 50%;
  display: inline-block;
`;

export default Circle;
