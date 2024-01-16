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
