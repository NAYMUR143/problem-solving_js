function convertRomanToInteger(romanNum) {
  const romanNumValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerValue = 0;
  for (let i = 0; i < romanNum.length; i++) {
    const currentValue = romanNumValues[romanNum[i]];
    const nextValue =
      i < romanNum.length - 1 ? romanNumValues[romanNum[i + 1]] : 0;

    if (currentValue < nextValue) {
      integerValue -= currentValue;
    } else {
      integerValue += currentValue;
    }
  }

  return integerValue;
}

console.log(convertRomanToInteger("I"));
console.log(convertRomanToInteger("XXI"));
