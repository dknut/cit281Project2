/*
    CIT 281 Project 1
    Name: Daniel Knutsen
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

//Returns a random character from array alphabet
function getRandomLetter() {
  return alphabet[getRandomInteger(1, alphabet.length - 1)];
}

//Returns a random lengthed string with characters from getRandomLetter
function getRandomString(minLength, maxLength) {
  for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
    result += getRandomLetter();
  }
  return result;
}

//Returns the sorted version of a string in alphabetical order
function getSortedString(string) {
  return string.split("").sort().toString().replace(/,/g, "");
}

console.log(getRandomString(10, 20));

console.log(getSortedString(getRandomString(10, 20)));
