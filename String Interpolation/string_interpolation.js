// String Interpolation
// Rather than using concatenations for long sentences or string, we use string interpolation
// String Interpolation uses back tick, not single or double quotes

// We don't need to use this:
let name = 'Bob Apples';
let age = 35;

let sentence = "Hi! My name is " + name + " and I'm " + age + "!";
console.log(sentence);

let num1 = 3;
let num2 = 4;

// It doesn't really give us the correct sum, it should be 7 not 34.
let sum = "We add two numbers here, " + num1 + " and " + num2 + ", together this will give us " + num1+num2;
console.log(sum);

// This is string interpolation, much easier!
let personName = "Tina Apples";
let personAge = 34;

let sentenceOfAPerson = `Hi! My name is ${personName} and I'm ${personAge}!`;
console.log(sentenceOfAPerson);

let number1 = 3;
let number2 = 4;

// String Interpolation give us the correct sum, it's 7.
let totalSum = `We have to numbers here ${number1} and ${number2}. And the total sum will be ${number1+number2}.`;
console.log(totalSum);

// Very useful if we have a dynamic record ID in Salesforce
let recordId = 987654332;
console.log(`http://salesforce.com/${recordId}`);