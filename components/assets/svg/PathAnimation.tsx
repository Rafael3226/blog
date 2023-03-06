import styled from "styled-components";
import ColorKeyframes, {
  ANIMATION_TIME,
} from "components/styled/color-key-frames";

const PathAnimation = styled.path`
  animation: ${ColorKeyframes} ${ANIMATION_TIME}s infinite;
  animation-timing-function: linear;
`;

export default PathAnimation;
