const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_-+=[]{}|;:'\",.<>?";
const allCharacters =
  uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
let pass = "";
const length = 12;
for (let i = 0; i < length; i++) {
  const randomNumber = Math.floor(Math.random() * allCharacters.length);
  pass += allCharacters.charAt(randomNumber);
}

console.log(pass);
