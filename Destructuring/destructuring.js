// Spread Operator

// 1. Array
var array = ["a", "b", "c"];
console.log(array);

// array starts at 0
console.log(array[0]); // a
console.log(array[1]); // b

// push a value into the array
array.push("d");
console.log(array);

// 2. Object
// Operates in key-value pair
// Key is always a string
// Value can be any data type including other object
// Key-value pair is called property
var person = {
    "name" : "Robert Lewis",
    "age" : 20,
    "full name" : "Robert Lewis"
}

console.log(person.name); // Robert Lewis
console.log(person.age); // 20

console.log(person["name"]); // Robert Lewis
console.log(person["age"]); //20

// If the key has a space, use this
console.log(person["full name"]); // Robert Lewis

// Build an additional object
person.hobby = "coding";
console.log(person.hobby); // coding

// Entire object shown
console.log(person);

// 3. Expanding of string
// The three dots is sign of spread operator

let greeting = "Hello there";
let listOfCharacters = [... greeting]; // This will separate each character of the word
console.log(listOfCharacters); 
console.log(listOfCharacters[4]); // o

// 4. Combining array
// Most commonly used in LWC
let companies1 = ["Amazon", "Facebook"];
let companies2 = ["Google", "Uber"];
let combineCompanies = [...companies1, ...companies2]; // This will combine the two arrays
console.log(combineCompanies);

// 5. Adding values to an array
let alphabet = ["b", "c", "d"];
let addedInTheAlphabet = ["a", ...alphabet, "e"]; // Just added the letter e
console.log(addedInTheAlphabet); // a, b, c, d, e

// 6. Combining objects
// For key, it's optional to put in the double quotes
// For value, it's mandatory to put in the double quotes
let person1 = {name: "Francesca Barbera", age: 25, gender: "female"};
let person2 = {name: "Bobby Lewis", age: 39, hobby: "coding"};

// We're using curly brackets not square brackets for this one. Curly brackets = Object
// What will see here is Bobby Lewis. person2 overrides person1 values if they have the same key names such as name and age
// If the other obejct does not have the same properties such as hobby and gender, it will take them to the latest object which is person2.
let combineTwoObjects = {...person1, ...person2}; 
console.log(combineTwoObjects);

// 7. Shallow Copy
// The issue with adding .pop or .push methods is that, it will add up the values due to referencing previous array
// We should avoid using .pop or .push methods without using spread operator
// With spread operator we can use those two methods

let books1 = ["Harry Potter", " Lord of the Rings"];
let books2 = [...books1]; // This creates a 'shallow copy' of the books1
books2.push(" The Green Mile", " Lord of the Flies");
console.log("Books1: " + books1); // ["Harry Potter", "Lord of the Rings"]
console.log("Books2: " + books2); // ["Harry Potter", "Lord of the Rings", "The Green Mile", "Lord of the Flies"]

// 8. Nested copy
// Spread operator does not do well in nested copy, it can only make a shallow copy on one level
// To get around this, use JSON methods, parse and stringify, it will go to any levels

let nintendoFranchise = [{name: "Super Mario"},{name: "Super Smash Brothers"}];
let replaceANintendoFranchise = JSON.parse(JSON.stringify(nintendoFranchise));
replaceANintendoFranchise[0].name = "Legend of Zelda"; // This will replace Super Mario with Legend of Zelda
console.log(nintendoFranchise);
console.log(replaceANintendoFranchise); 

