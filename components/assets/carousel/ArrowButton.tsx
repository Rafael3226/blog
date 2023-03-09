import styled from "styled-components";

export const ArrowButton = styled.button`
  z-index: 3;
  color: #fff;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 25px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 50%;

  &.right {
    right: 10px;
  }
  &.left {
    left: 10px;
  }

  &:disabled {
    display: none;
  }
`;
