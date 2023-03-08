import styled from "styled-components";

const DarkBackground = styled.div`
  display: flex;
  align-items: center;
  background-color: #111;
  border-radius: 25px;
  padding: 8px 12px;
  transition: 0.3s;

  &:hover {
    background: none;
  }
`;

export default DarkBackground;
