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

  &.white {
    position: none;
    font-size: 3rem;
    color: #000;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 1);
  }

  &:disabled {
    display: none;
  }
`;
