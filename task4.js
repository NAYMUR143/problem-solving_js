// calculator
const calculatorResult = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      throw new Error("please add a property");
  }
};
const num1 = 0;
const operator = "*";
const num2 = 3;
console.log(calculatorResult(num1, num2, operator));
