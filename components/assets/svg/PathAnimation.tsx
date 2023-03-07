import styled from "styled-components";
import {
  ANIMATION_TIME,
  SvgColorKeyFrames,
} from "components/styled/color-key-frames";

const PathAnimation = styled.path`
  animation: ${SvgColorKeyFrames} ${ANIMATION_TIME}s infinite;
  animation-timing-function: linear;
`;

export default PathAnimation;
