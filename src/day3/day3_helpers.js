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

export function getCommonType(inputArray) {
  let map = new Map();
  inputArray.forEach((input) => {
    let set = new Set();
    [...input].forEach((char) => {
      set.add(char);
    });
    set.forEach((key) => {
      if (map.has(key)) {
        map.set(key, map.get(key) + 1);
      } else {
        map.set(key, 1);
      }
    });//set
  });//inputArray.forEach
  for (let [key, value] of map.entries()) {
    if (value === 3) return key;
  }
  return '';
}

export function convertSplitByGroups(input) {
  const array = input.split(/\r?\n/);
  const result = [];
  let count = 1;
  let acc = [];
  array.forEach(item => {
    if (count === 3) {
      acc.push(item);
      result.push(acc);
      count = 1;
      acc = [];
    } else {
      acc.push(item);
      count += 1;
    }
  });

  return result; 
}

export function sumPrioritiesOfCommonBadges(input) {
  const arrays = convertSplitByGroups(input);
  
  let sum = 0;
  arrays.forEach((array) => {
    const commonType = getCommonType(array);
    const priority = getPriorityValue(commonType);
    sum += priority;
  });
  return sum;
}