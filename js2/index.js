// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// Find Maximum Value
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array (example: filter out numbers less than 10)
function filterArray(arr, condition) {
  return arr.filter(condition);
}
// Factorial (Recursive)
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Prime Number Check
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence (Generates an array of n terms)
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"

console.log(findMax([3, 5, 1, 9])); // 9
console.log(findMin([3, 5, 1, 9])); // 1
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(filterArray([3, 7, 2, 10, 15], (num) => num > 5)); // [7, 10, 15]

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
