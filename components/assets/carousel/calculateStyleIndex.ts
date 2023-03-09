interface IndexOffsets {
  [key: number]: number;
}

const indexOffsets: IndexOffsets = {
  "2": 1,
  "1": 2,
  "0": 3,
  "-1": 4,
  "-2": 5,
};

const calculateStyleIndex = (index: number, i: number): number => {
  return indexOffsets[index - i] || 0;
};

export default calculateStyleIndex;
