function addition(a, b) {
  return a + b;
}

// Example test cases:
console.log(addition(3, 2)); // ➞ 5
console.log(addition(-3, -6)); // ➞ -9
console.log(addition(7, 3)); // ➞ 10
console.log(addition(0, 0)); // ➞ 0
function convert(minutes) {
  return minutes * 60;
}

// Example test cases:
console.log(convert(5)); // ➞ 300
console.log(convert(3)); // ➞ 180
console.log(convert(2)); // ➞ 120
console.log(convert(0)); // ➞ 0
console.log(convert(10)); // ➞ 600
function addition(num) {
  return num + 1;
}

// Example test cases:
console.log(addition(0)); // ➞ 1
console.log(addition(9)); // ➞ 10
console.log(addition(-3)); // ➞ -2
console.log(addition(100)); // ➞ 101
console.log(addition(-10)); // ➞ -9
function triArea(base, height) {
  return (base * height) / 2;
}

// Example test cases:
console.log(triArea(3, 2)); // ➞ 3
console.log(triArea(7, 4)); // ➞ 14
console.log(triArea(10, 10)); // ➞ 50
console.log(triArea(5, 8)); // ➞ 20
console.log(triArea(0, 10)); // ➞ 0
function calcAge(age) {
  return age * 365;
}

// Example test cases:
console.log(calcAge(65)); // ➞ 23725
console.log(calcAge(0)); // ➞ 0
console.log(calcAge(20)); // ➞ 7300
console.log(calcAge(1)); // ➞ 365
console.log(calcAge(10)); // ➞ 3650
function cubes(n) {
  return n ** 3;
}

// Example test cases:
console.log(cubes(3)); // ➞ 27
console.log(cubes(5)); // ➞ 125
console.log(cubes(10)); // ➞ 1000
console.log(cubes(2)); // ➞ 8
console.log(cubes(1)); // ➞ 1
function getFirstValue(arr) {
  return arr[0];
}

// Example test cases:
console.log(getFirstValue([1, 2, 3])); // ➞ 1
console.log(getFirstValue([80, 5, 100])); // ➞ 80
console.log(getFirstValue([-500, 0, 50])); // ➞ -500
console.log(getFirstValue([10])); // ➞ 10
console.log(getFirstValue([])); // ➞ undefined (empty array case)
function circuitPower(voltage, current) {
  return voltage * current;
}

// Example test cases:
console.log(circuitPower(230, 10)); // ➞ 2300
console.log(circuitPower(110, 3)); // ➞ 330
console.log(circuitPower(480, 20)); // ➞ 9600
console.log(circuitPower(12, 2)); // ➞ 24
console.log(circuitPower(0, 10)); // ➞ 0
function howManySeconds(hours) {
  return hours * 60 * 60;
}

// Example test cases:
console.log(howManySeconds(2)); // ➞ 7200
console.log(howManySeconds(10)); // ➞ 36000
console.log(howManySeconds(24)); // ➞ 86400
console.log(howManySeconds(1)); // ➞ 3600
console.log(howManySeconds(0)); // ➞ 0
function sumPolygon(n) {
  return (n - 2) * 180;
}

// Example test cases:
console.log(sumPolygon(3)); // ➞ 180
console.log(sumPolygon(4)); // ➞ 360
console.log(sumPolygon(6)); // ➞ 720
console.log(sumPolygon(5)); // ➞ 540
console.log(sumPolygon(8)); // ➞ 1080
function giveMeSomething(a) {
  return "something " + a;
}

// Example test cases:
console.log(giveMeSomething("is better than nothing")); // ➞ "something is better than nothing"
console.log(giveMeSomething("Bob Jane")); // ➞ "something Bob Jane"
console.log(giveMeSomething("something")); // ➞ "something something"
console.log(giveMeSomething("cool")); // ➞ "something cool"
console.log(giveMeSomething("awesome")); // ➞ "something awesome"
