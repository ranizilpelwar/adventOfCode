export function convert(input) {
  const allPairs = input.split(/\r?\n/);//2-4,6-8
  const splits = allPairs.map((pairString) => {
    return pairString.split(',');//[2-4, 6-8]
  });
  const assignments = splits.map((pairs) => {
    return pairs.map((assignment) => {
      return assignment.split('-');
    });
  });
  const strings = assignments.map((pairs) => {
    return pairs[0].concat(pairs[1]);
  });
  const result = strings.map((pairs) => {
    return pairs.map((value) => {
      return +value;
    });
  });
  return result;
}

export function getOverlappingCount(inputArray) {
  let count = 0;
  inputArray.forEach((arr) => {
    if ((arr[0] >= arr[2] && arr[1] <= arr[3]) ||
    (arr[2] >= arr[0] && arr[3] <= arr[1])) {
      count++;
    }
  });
  return count;
}

export function getResult(inputString) {
  const output = convert(inputString);
  return getOverlappingCount(output);
}

export function getAnyOverlappingCount(inputArray) {
  let count = 0;
  inputArray.forEach((arr) => {
    const startOne = arr[0];
    const endOne = arr[1];
    const startTwo = arr[2];
    const endTwo = arr[3];
    if (
      (startOne <= startTwo && endOne >= endTwo)
    || (startOne >= startTwo && endOne <= endTwo)
    || (startOne <= endTwo && startTwo <= endOne))
      {
      count++;
    }
  });
  return count;
}


export function getPart2Result(inputString) {
  const output = convert(inputString);
  return getAnyOverlappingCount(output);
}