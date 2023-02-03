import styled, { keyframes } from "styled-components";

const changeColors = keyframes`
  0% { fill: #FF0000; }
  7% { fill: #FF8000; }
  21% { fill: #FFFF00; }
  28% { fill: #80FF00; }
  35% { fill: #00FF00; }
  42% { fill: #00FF80; }
  49% { fill: #00FFFF; }
  57% { fill: #0080FF; }
  64% { fill: #0000FF; }
  71% { fill: #8000FF; }
  78% { fill: #FF00FF; }
  85% { fill: #FF0080; }
  92% { fill: #FFFFFF; }
  100% { fill: #FF0000; }
`;

const ANIMATION_TIME = 15;

const PathStyled = styled.path`
  animation: ${changeColors} ${ANIMATION_TIME}s infinite;
  animation-timing-function: linear;
`;

export default PathStyled;