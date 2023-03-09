import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  min-height: 630px;
  margin-bottom: 20px;

  #item-1 {
    transform: translatex(-300px) scale(0.7);
    opacity: 0.4;
    z-index: 0;
  }
  #item-2 {
    transform: translatex(-150px) scale(0.8);
    opacity: 0.6;
    z-index: 1;
  }
  #item-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 2;
  }
  #item-4 {
    transform: translatex(150px) scale(0.8);
    opacity: 0.6;
    z-index: 1;
  }
  #item-5 {
    transform: translatex(300px) scale(0.7);
    opacity: 0.4;
    z-index: 0;
  }
`;

export const Card = styled.label`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  position: absolute;

  transition: transform 0.4s ease;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: auto;
  height: 600px;
  border-radius: 10px;
`;
