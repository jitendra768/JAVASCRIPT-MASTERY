// Normal functions

function add(num1,num2,num3){
 return num1+num2+num3;
}

console.log(add(2,3,4));

// currying function 

function addNum(num1){
    return function(num2){
        return function(num3){
            return num1+num2+num3;
        }
    }
}

const result = addNum(2)(3)(4);  //9
const result1 = addNum(2)
const result2 = addNum(2)(3)
const result3 = addNum(2)(3)(4)
console.log(result3)