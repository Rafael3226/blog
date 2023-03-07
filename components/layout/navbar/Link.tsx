import styled from "styled-components";
import Link from "next/link";

import { TextColorKeyFrames } from "components/styled/color-key-frames";

const StyledLink = styled(Link)`
  width: 25%;
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    animation: ${TextColorKeyFrames} 3s infinite;
    animation-timing-function: linear;
  }
`;

export default StyledLink;
