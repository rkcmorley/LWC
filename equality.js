// Equality Comparison
// Normal Comparison
// Strict Comparison

// 1. Normal Comparison (==) | Only comapres value but also convert one or both of them to a common type before making a comparison.
// This will only check the values, it doesn't bother checking the data type but it does convert it.
// Don't use the normal comparison, lots of bugs occur in this one.

/** 
console.log(3 == 3); //true
console.log("nikhil" == "NIKHIL"); //false
console.log("nikhil" == "nikhil"); //true
*/

// 2. Strict Comparison (===) | Operator compares the values of two operands for equality without performing any type conversion. 
// Different data types will show it as false.
// Don't use the strict comparison, lots of bugs occur in this one.

/** 
console.log(3 === 3); //true
console.log(3 === '3'); //false
console.log("nikhil" === "NIKHIL"); //false
console.log("nikhil" === "nikhil"); //true
*/

// Null VS Undefined
var x;
console.log(x); //undefined

var y = null;
console.log(y); //null

console.log(x == y); //true
console.log(x === y); //false


