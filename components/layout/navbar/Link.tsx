import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  width: 25%;
  color: white;

  text-decoration: none;

  &:hover {
    font-size: 1.1rem;
  }
`;

export default StyledLink;
