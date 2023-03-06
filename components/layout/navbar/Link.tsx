import styled from "styled-components";
import Link from "next/link";

import ColorKeyframes, {
  ANIMATION_TIME,
} from "components/styled/color-key-frames";

const StyledLink = styled(Link)`
  width: 25%;
  color: white;

  text-decoration: none;

  &:hover {
    animation: ${ColorKeyframes} ${ANIMATION_TIME}s infinite;
    animation-timing-function: linear;
  }
`;

export default StyledLink;
