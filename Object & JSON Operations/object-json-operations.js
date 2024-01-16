// Object/JSON Operations
/**
 * 4 most commonly used for LWC:
 * 1. Object.keys()
 * 2. Object.values()
 * 3. JSON.stringify()
 * 4. JSON.parse()
*/
/**
 * JSON, which stands for JavaScript Object Notation, is a lightweight data-interchange format
 * used for storing and transporting data. It is language independent and easy to understand.
 * JSON is often used when data is sent from a server to a web page and is commonly used for
 * transmitting data between a server and a web application.
 *
 * The JSON format is syntactically similar to the code for creating JavaScript objects,
 * making it easy to convert JSON data into native JavaScript objects
*/

// We use JSON to pass data from LWC to Apex.
// JSON is an object, but you can convert it into a string with stringify.
// Object is when the key doesn't have double quotes. If it does, then it's a string.
let car = {
    name: "Mazda2 Hybrid",
    year: 2021,
    description: "Rebadged Toyota Yaris Hybrid (XP210) for the European market."
}

// Object.keys() - this will return the keys. In this example, we have name, year and description.
// It returns in array format.
let returnKeysOnly = Object.keys(car);
console.log(returnKeysOnly);

// Object.values() - this will return the values. In this example, we have Mazda2 Hybrid, 2021, and the entire description.
// It returns in array format.
let returnValuesOnly = Object.values(car);
console.log(returnValuesOnly);

// JSON.stringify() - This method is commonly used when sending data to a web server, as the data has to be in the form of a string. 
let turnToString = JSON.stringify(car);
console.log(turnToString); // The result is an array with both key and value turned to string with double quotes.

// JSON.parse() - is a built-in function in JavaScript that is used to parse a string in JSON format and convert it into a JavaScript object.
let turnToObject = JSON.parse(turnToString); // We used the string formatted version of car, otherwise, it won't work.
console.log(turnToObject);