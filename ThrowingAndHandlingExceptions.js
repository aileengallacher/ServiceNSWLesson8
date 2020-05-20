// function addNumbers(num1,num2) {
//     throw "ERROR";
// }
// addNumbers(12,19);

//
function addNumbers(num1,num2) {
    if(isNaN(num1) || isNaN(num2)){    // test by changing the values in console.log
    throw "ERROR: num1 and num2 must both be numbers";
    }
    return parseInt(num1) + parseInt(num2)
}
console.log(addNumbers(11,19)); 
