// find the second smallest element

function secondSmallestNum(arr) {
  if (arr.length < 2) {
    throw new Error("Array should contain at least two elements.");
  }
  const sortedArray = arr.slice().sort((a, b) => a - b);
  console.log(sortedArray);
  return sortedArray[1];
}

const arr = [5, 12, 8, 3, 11, 7, 4];
const secondSmallest = secondSmallestNum(arr);
console.log(secondSmallest);
