// Normal functions

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(add(2, 3, 4));

// currying function
// currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.
// Currying allows you to create partially applied functions, where you fix some of the arguments in advance and leave the rest to be supplied later. This is useful when you have a function that requires some parameters to be the same across multiple calls.

function addNum(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

const result = addNum(2)(3)(4); //9
const result1 = addNum(2);
const result2 = addNum(2)(3);
const result3 = addNum(2)(3)(4);
console.log(result3);
