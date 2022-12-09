function getTotals(text) {
  console.log("split text:");
  const array = text.split(/\r?\n/);
  console.log(array);
  const acc = [];
  let sum = 0;
  array.forEach(element => {
    if (element) {
      sum += +element
    } else {
      acc.push(sum);
      sum = 0;
    }
  });
  return acc;
}

function getHighestTotal(array) {
return Math.max(...array);
}