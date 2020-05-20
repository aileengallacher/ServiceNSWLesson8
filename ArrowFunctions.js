// const addNumbers = function(num1,num2) {
//     return num1 + num2 ;
// }
// console.log(addNumbers(12,19));

// another way using arrow functions

const addNumbers = (num1,num2) => num1 + num2 ;

console.log(addNumbers(12,19));

// function timesTwo

const timesTwo = num => num * 2;  // can remove the () if only has 1 argument

console.log(timesTwo(2));