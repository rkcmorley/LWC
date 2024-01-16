// String Methods
// We need to use only 7 of these
/** 
 * 1. includes()
 * 2. indexOf()
 * 3. startsWith()
 * 4. slice()
 * 5. toLowerCase()
 * 6. toUpperCase()
 * 7. trim
*/

// 1. Includes() - checks if a word, words or a character is in a string.
let sentence = "You were the chosen one, Anakin!";
let checkTheWord = sentence.includes("Anakin");
console.log(checkTheWord); // true

// 2. indexOf() - returns the index position of the first occurence of a specified value in a string. 
// In this example, if we have more than one word that's the same, it will select only the first one.
// For example, if we have two "chosen" word, it will select the first one.
// It will count the index including spaces.
let findIndex = sentence.indexOf("chosen");
console.log(findIndex); // 13

// -1 means it cannot find the word
let cannotFindIndex = sentence.indexOf("lightsaber");
console.log(cannotFindIndex); // -1

// 3. startsWith() - The startsWith() method in JavaScript is used to check whether a string begins 
//                   with the characters of a specified string.It returns true if the string starts 
//                   with the specified characters, otherwise it returns false

// It's case sensitive, if you use "you" not "You", it will create an error.
let startsWith = sentence.startsWith("You"); // true
let notStartingWith = sentence.startsWith("were"); // false
console.log(startsWith);
console.log(notStartingWith);

// 4. Slice() - extract parts of a string and returns the extracted parts in a new string
let getCharacters = sentence.slice(0, 2); // Y, o from You
console.log(getCharacters);

// 5. toLowerCase() - converts all letters to lowercase
let uppercaseWords = "HELLO DARKNESS, MY OLD FRIEND.";
let convertedToLowercaseWords = uppercaseWords.toLowerCase();
console.log(convertedToLowercaseWords);

// 6. toUpperCase() - converts all letters to uppercase
let lowercaseWords = "drums! Drums from the deep! They're coming!";
let convertedToUppercaseWords = lowercaseWords.toUpperCase();
console.log(convertedToUppercaseWords);

// trim() - this is heavily used, mostly because users type gibberish words in search bars
// This is used to trim white spaces on both sides of the string
let weirdWord = "   Why, hello there!   ";
let nicelyTrimmed = weirdWord.trim();
console.log(nicelyTrimmed);