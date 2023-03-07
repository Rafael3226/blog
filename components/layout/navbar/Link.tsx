import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

export default StyledLink;
