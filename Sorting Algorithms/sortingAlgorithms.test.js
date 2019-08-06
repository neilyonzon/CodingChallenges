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

test("Selection sorts the array [2,0,1,4,5,3]", () => {
  expect(sortingAlgorithms.selectSort([2, 0, 1, 4, 5, 3])).toEqual([
    0,
    1,
    2,
    3,
    4,
    5
  ]);
});

test("Insertion sorts the array [13,0,2,1,6,300]", () => {
  expect(sortingAlgorithms.insertSort([13, 0, 2, 1, 6, 300])).toEqual([
    0,
    1,
    2,
    6,
    13,
    300
  ]);
});
