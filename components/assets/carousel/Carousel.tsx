import { ReactElement, useState } from "react";

import { ArrowButton } from "./ArrowButton";
import calculateStyleIndex from "./calculateStyleIndex";
import { Card, Cards } from "./Cards";

function Carousel({ items }: { items: ReactElement[] }) {
  const [index, setIndex] = useState(0);

  function handleClick(n: number) {
    setIndex(n);
  }

  return (
    <>
      <ArrowButton
        className="left"
        onClick={() => handleClick(index - 1)}
        disabled={index === 0}
      >
        {"<"}
      </ArrowButton>
      <ArrowButton
        className="right"
        onClick={() => handleClick(index + 1)}
        disabled={index >= items.length - 1}
      >
        {">"}
      </ArrowButton>

      <Cards>
        {items.map((item, i) => {
          const itemId = `item-${calculateStyleIndex(index, i)}`;
          return (
            itemId !== "item-0" && (
              <Card key={i} id={itemId} onClick={() => setIndex(i)}>
                {item}
              </Card>
            )
          );
        })}
      </Cards>
    </>
  );
}

export default Carousel;
