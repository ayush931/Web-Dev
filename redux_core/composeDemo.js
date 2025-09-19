import { compose } from "redux";

function removeSpaces(string) {
  return string.split(" ").join("");
}

function repeatString(string) {
  return string.repeat(2);
}

function convertToUpperCase(string) {
  return string.toUpperCase();
}

const composedFunction = compose(removeSpaces, repeatString, convertToUpperCase)
console.log(composedFunction("abc def ghi"))