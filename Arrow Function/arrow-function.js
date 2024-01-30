// Arrow Function

function aNormalFunction() {
    console.log("Hello there, normal function!");
}
aNormalFunction();

// With arrow function, we get rid of the word, 'function'.
// No need to use curly brackets in the body after the arrow. Unless we have a return statement.
// We need curly brackets if there are multiple statements that's complex.
let arrowFunctionOne = () => console.log("Hello there, arrow function one!");
arrowFunctionOne();

function addition(data) {
    let sum = data + 2;
    return sum;
}
console.log('Normal addition function: ', addition(3));

// let additionArrowFunction = (data) => { console.log(data + 5) };

// No need to add a parenthesis on the data parameter, unless you have two parameters
let additionArrowFunction = data => {
    let sum = data + 5;
    return sum;
};
console.log('Addition arrow function: ', additionArrowFunction(5));

let multiplyArrowFunction = (dataOne, dataTwo) => {
    let multiply = dataOne * dataTwo;
    return multiply;
};
console.log('Multiply arrow function: ', multiplyArrowFunction(2, 2));

// Just one statement which will return the value without writing 'return'.
let divideArrowFunction = (dataOne, dataTwo) => dataOne / dataTwo;
console.log('Divide arrow function: ', divideArrowFunction(8, 4));

// Arrow function is useful mostly with map method or scenarios
let arrayOfNumbers = [1, 2, 3, 4];
let newArrayOfNumbers = arrayOfNumbers.map(item => item * 2);
console.log('Array/Map arrow function: ', newArrayOfNumbers);

/**
 * 
 * Problems that Arrow function solve is that no matter how nested the 
 * keys and values are, it will be pointed out consistently.
 *  
 * */
let person = {
    name: "Bobby",
    getFunction: function () {
        console.log('This will return the name of the person: ', this.name);
        let nameOfThePerson = () => {
            console.log('Returning this name: ', this.name);
            console.log('Returning the name again: ', this.name);
        }
        // This function is called outside the let variable
        nameOfThePerson()
    }
}
person.getFunction();