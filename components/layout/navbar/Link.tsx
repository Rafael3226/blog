import styled from "styled-components";
import Link from "next/link";

import { TextColorKeyFrames } from "components/styled/color-key-frames";

const StyledLink = styled(Link)`
  width: 25%;
  color: white;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

export default StyledLink;
