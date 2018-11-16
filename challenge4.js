// Challenge 4: Capitalize letters, return a string with the first letter of every word capitalized.

function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}

const output = capitalizeLetters("i do really love javascript");

console.log(output);
