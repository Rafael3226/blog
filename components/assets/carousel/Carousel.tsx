import { useState } from "react";
import styled from "styled-components";
const Cards = styled.div`
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

const Card = styled.label`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  position: absolute;

  transition: transform 0.4s ease;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: auto;
  height: 600px;
  border-radius: 10px;
`;

const ArrowButton = styled.button`
  z-index: 3;
  color: #fff;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 25px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 50%;

  &.right {
    right: 10px;
  }
  &.left {
    left: 10px;
  }

  &:disabled {
    display: none;
  }
`;

const items = [
  "",
  "",
  "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <ArrowButton
        className="left"
        onClick={() => {
          setIndex(index - 1);
        }}
        disabled={index === 0}
      >{`<`}</ArrowButton>
      <ArrowButton
        className="right"
        onClick={() => {
          setIndex(index + 1);
        }}
        disabled={index >= items.length - 3}
      >{`>`}</ArrowButton>

      <Cards>
        {items.slice(index, index + 5).map((src, i) => {
          const itemId = `item-${i + 1}`;
          return (
            src && (
              <Card key={i} htmlFor={itemId} id={itemId}>
                <CardImage src={src} alt={itemId} />
              </Card>
            )
          );
        })}
      </Cards>
    </>
  );
}

export default Carousel;
