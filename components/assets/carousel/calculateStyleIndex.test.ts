import { expect, test } from "@jest/globals";
import calculateStyleIndex from "./calculateStyleIndex";

test("Carousel, calculate Style Index", () => {
  expect(calculateStyleIndex(0, 0)).toBe(3);
  expect(calculateStyleIndex(0, 1)).toBe(4);
  expect(calculateStyleIndex(0, 2)).toBe(5);
  expect(calculateStyleIndex(0, 3)).toBe(0);
  expect(calculateStyleIndex(0, 4)).toBe(0);

  expect(calculateStyleIndex(1, 0)).toBe(2);
  expect(calculateStyleIndex(1, 1)).toBe(3);
  expect(calculateStyleIndex(1, 2)).toBe(4);
  expect(calculateStyleIndex(1, 3)).toBe(5);
  expect(calculateStyleIndex(1, 4)).toBe(0);
  expect(calculateStyleIndex(1, 5)).toBe(0);

  expect(calculateStyleIndex(2, 0)).toBe(1);
  expect(calculateStyleIndex(2, 1)).toBe(2);
  expect(calculateStyleIndex(2, 2)).toBe(3);
  expect(calculateStyleIndex(2, 3)).toBe(4);
  expect(calculateStyleIndex(2, 4)).toBe(5);
  expect(calculateStyleIndex(2, 5)).toBe(0);
  expect(calculateStyleIndex(2, 6)).toBe(0);

  expect(calculateStyleIndex(3, 0)).toBe(0);
  expect(calculateStyleIndex(3, 1)).toBe(1);
  expect(calculateStyleIndex(3, 2)).toBe(2);
  expect(calculateStyleIndex(3, 3)).toBe(3);
  expect(calculateStyleIndex(3, 4)).toBe(4);
  expect(calculateStyleIndex(3, 5)).toBe(5);
  expect(calculateStyleIndex(3, 6)).toBe(0);
  expect(calculateStyleIndex(3, 7)).toBe(0);

  expect(calculateStyleIndex(4, 0)).toBe(0);
  expect(calculateStyleIndex(4, 1)).toBe(0);
  expect(calculateStyleIndex(4, 2)).toBe(1);
  expect(calculateStyleIndex(4, 3)).toBe(2);
  expect(calculateStyleIndex(4, 4)).toBe(3);
  expect(calculateStyleIndex(4, 5)).toBe(4);
  expect(calculateStyleIndex(4, 6)).toBe(5);
  expect(calculateStyleIndex(4, 7)).toBe(0);
  expect(calculateStyleIndex(4, 8)).toBe(0);

  expect(calculateStyleIndex(5, 0)).toBe(0);
  expect(calculateStyleIndex(5, 1)).toBe(0);
  expect(calculateStyleIndex(5, 2)).toBe(0);
  expect(calculateStyleIndex(5, 3)).toBe(1);
  expect(calculateStyleIndex(5, 4)).toBe(2);
  expect(calculateStyleIndex(5, 5)).toBe(3);
  expect(calculateStyleIndex(5, 6)).toBe(4);
  expect(calculateStyleIndex(5, 7)).toBe(5);
  expect(calculateStyleIndex(5, 8)).toBe(0);
  expect(calculateStyleIndex(5, 9)).toBe(0);
});
