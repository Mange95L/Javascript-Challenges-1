// Challenge 2: Validate a palindrome, return true if palindrome and false if not.

function isPalindrome(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");

  return revString === str;
}

const output = isPalindrome("olasalo");
console.log(output);
