// Challenge 1: Reverse a string, return a string in reverse.
function reverseString(str) {
  return str.split("").reduce((revString, char) => char + revString, "");
}

const output = reverseString("This should be reverse!");
console.log(output);
