// Normal import
// This is imported from the JS file we made, utils.js
import { PI, add } from './utils.js';
console.log(PI);
console.log(add(2, 3));

import { answerToLife, subtract } from './utils.js';
console.log(answerToLife);
console.log(subtract(10, 5));

import { pie, addition } from './utils.js';
console.log(pie);
console.log(addition(2, 3));

// With export default, there's no need to put it in a curly bracket
import substraction from './utils.js';
console.log(substraction(9, 8));

// Asterisk sign means import everything
import * as everything from './all-utils.js';
console.log(everything.numberTwo);
console.log(everything.multiply(2, 5));