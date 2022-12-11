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
