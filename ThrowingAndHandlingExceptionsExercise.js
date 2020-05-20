// Throwing and Handling Exceptions Exercise
// Q1
// function divide(num1, num2) {
//     if (num2 == 0) {
//         throw new Error("Error: num2 must not be a 0.");
//     }
//     return parseFloat(num1) / parseFloat(num2);
// }
// console.log(divide(10,2))

// Q2 
function divide(num1, num2) {
    if (num2 == 0) {
        throw new Error("Error: num2 must not be a 0.");
    }
    return parseFloat(num1) / parseFloat(num2);
}
let mySum;
try{
    mySum = divide(10,12);
} catch (err) {
    console.log(err.message)
} finally {
    if (!mySum) {
        mySum = 0;
    }
}
console.log(mySum);

