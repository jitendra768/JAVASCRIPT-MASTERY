// The == operator compares the values of two variables after performing type conversion if necessary. On the other hand, the === operator compares the values of two variables without performing type conversion.


const num = 10;
const str = "10";

console.log(num == str); // true - The values are the same after type conversion
console.log(num === str); // false - The values are different types and not equal