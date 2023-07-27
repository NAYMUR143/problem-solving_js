// task 1
function reversedString(value) {
  return value.split(" ").reverse().join("");
}
console.log(reversedString("naymur rahman"));

// task 2
const arr = [2, -5, 10, -3, 7];
const positiveNum = arr.reduce((pre, current) => {
  if (current > 0) {
    return pre + current;
  } else {
    return pre;
  }
}, 0);

console.log(positiveNum);

// task 3

function mostFrequentElement(arry) {
  const elementCounter = {};
  for (const element of arry) {
    console.log(element);
    elementCounter[element] = (elementCounter[element] || 0) + 1;
  }
  console.log(elementCounter);

  let mostElement;
  let highestElement = 0;
  for (const element in elementCounter) {
    if (elementCounter[element] > highestElement) {
      console.log("hihghe", highestElement);
      console.log(element);
      mostElement = parseInt(element, 10);
      highestElement = elementCounter[element];
    }
  }

  return mostElement;
}

const arry = [3, 5, 5, 6, 5, 1, 5, 3, 5, 3, 1, 4, 5];
const mostFrequent = mostFrequentElement(arry);
console.log("most frequent Number is:", mostFrequent);
