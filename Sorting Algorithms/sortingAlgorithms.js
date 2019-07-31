const sortingAlgorithms = {
  bubbleSort: arr => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let tester = arr[i];
        let comparison = arr[j];
        if (tester > comparison) {
          arr[j] = tester;
          arr[i] = comparison;
        }
      }
    }
    return arr;
  }
};

module.exports = sortingAlgorithms;
