import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  min-height: 620px;
  padding: 20px;

  #item-1 {
    transform: translatex(-20vw) scale(0.7);
    opacity: 0.4;
    z-index: 1000;
  }
  #item-2 {
    transform: translatex(-10vw) scale(0.8);
    opacity: 0.6;
    z-index: 1010;
  }
  #item-3 {
    z-index: 1020;
  }
  #item-4 {
    transform: translatex(10vw) scale(0.8);
    opacity: 0.6;
    z-index: 1010;
  }
  #item-5 {
    transform: translatex(20vw) scale(0.7);
    opacity: 0.4;
    z-index: 1000;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  position: absolute;

  transition: transform 0.4s ease;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const DivImage = styled.div`
  display: flex;
  align-items: center;

  height: 250px;
  width: 240px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 380px;
    height: 380px;
  }
  @media (min-width: 992px) {
    width: 420px;
    height: 400px;
  }
`;
