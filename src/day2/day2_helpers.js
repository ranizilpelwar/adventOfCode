export function getValue(choice) {
  let result = 0;
  switch (choice)  { 
    case "X":
      result = 1;
      break;
    case "Y":
      result = 2;
      break;
    case "Z":
      result = 3;
      break;
    default: 
      break;
  }
  return result;
}

export function getOutcomeScore(array) {
  const combos = [
    {key: ['A', 'X'], value: 3},
    {key: ['A', 'Y'], value: 6},
    {key: ['A', 'Z'], value: 0},
    {key: ['B', 'X'], value: 0},
    {key: ['B', 'Y'], value: 3},
    {key: ['B', 'Z'], value: 6},
    {key: ['C', 'X'], value: 6},
    {key: ['C', 'Y'], value: 0},
    {key: ['C', 'Z'], value: 3},
  ]

  const match = combos.find(item => item.key[0] === array[0] && item.key[1] === array[1]);
  if (match) {
    return match.value;
  } else {
    return 0;
  }
}

export function getRoundScore(array) {
  return getOutcomeScore(array) + getValue(array[1]);
}

export function getTotalScore(arrayOfArrays) {
  let sum = 0;
  arrayOfArrays.forEach(array => {
    sum += getRoundScore(array);
  });
  return sum;
}

export function convert(text) {
  const array = text.split(/\r?\n/);//A Y
  const acc = [];
  array.forEach(item => {
    const subArray = item.split(" ");
    console.log('subArray', subArray);
    subArray.length > 1 && acc.push(subArray);
  });
  return acc;
}

export async function loadFile(file) {
  let text = await file.text();
  let roundsArray = convert(text);
  console.log('converted:', roundsArray);
  console.log('totalScore', getTotalScore(roundsArray));
}