const sortingAlgorithms = require("./sortingAlgorithms");

test("Bubble sorts the array [2,0,1,4,6,5]", () => {
  expect(sortingAlgorithms.bubbleSort([2, 0, 1, 4, 6, 5])).toEqual([
    0,
    1,
    2,
    4,
    5,
    6
  ]);
});
