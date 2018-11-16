// Challenge 3: Reverse an integer, return an integer in reverse.

function reverseInt(int) {
  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(revString) * Math.sign(int);
}

const output = reverseInt(123456789);

console.log(output);
