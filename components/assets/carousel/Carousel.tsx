import { useState } from "react";

import { ArrowButton } from "./ArrowButton";
import calculateStyleIndex from "./calculateStyleIndex";
import { Card, CardImage, Cards } from "./Cards";

const items = [
  "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",

  "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
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
        disabled={index >= items.length - 1}
      >{`>`}</ArrowButton>

      <Cards>
        {items.map((src, i) => {
          const itemId = `item-${calculateStyleIndex(index, i)}`;
          return (
            itemId !== "item-0" && (
              <Card
                key={i}
                htmlFor={itemId}
                id={itemId}
                onClick={() => {
                  setIndex(i);
                }}
              >
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
