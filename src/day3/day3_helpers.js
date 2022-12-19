export function getPriorityValue(input) {
  let result = input.charCodeAt(0) - 96; 
  if (input.toUpperCase() === input) {
    result += 58;
  }
  return result;
}

export function getDuplicates(input) {
  const length = input.length;
  let leftIndex = 0;
  let rightIndex = length/2;
  let dups = new Set();
  let leftKeys = new Set();
  let rightKeys = new Set();
  while(rightIndex < length) {
    const leftValue = input[leftIndex];
    const rightValue = input[rightIndex];
    leftKeys.add(leftValue); 
    rightKeys.add(rightValue);
    if (leftKeys.has(rightValue)) {
      dups.add(rightValue);
    } 
    if(rightKeys.has(leftValue)) {
      dups.add(leftValue);
    } 
    leftIndex++;
    rightIndex++;
  }
  return Array.from(dups);
}

export function getAllDuplicates(inputArray) {
  let result = [];
  inputArray.forEach((item) => {
    const dups = getDuplicates(item);
    result = result.concat(dups);
  })
  return result;
}

export function getPrioritySum(array) {
  let sum = 0;
  array.forEach((input) => {
    sum += getPriorityValue(input);
  })
  return sum;
}