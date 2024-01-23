// This is the syntax of the array and the methods
// array.methodName(function(currentItem, index, actualArray){ ... });

let randomNumbers = [5, 4, 3, 2, 1];

// Map()
// This will have the callback function within the map function
// Inside the parameter of a function, we have array, it will take in the array even though we named it randomNumbers
/**
 * The map() method takes a function as an argument, which is executed for each array element, and 
 * returns the results as a new array.
 */
let showMap = randomNumbers.map(function (currentItem, index, array) {
    console.log(`The current item is ${currentItem}. The index is ${index}. And lastly, the array is ${array}.`);
    return currentItem * 2;
});
console.log(`map(): ${showMap}`);

// Filter()
// You can name the function's parameters anything you like, but we will use currentItem, index and array, so it's easier to remember.
/**
 * The filter() method takes a function as an argument, which is executed for each array element, and 
 * returns a new array containing only the elements for which the function returns true. 
 */
let showFilter = randomNumbers.filter(function (currentItem, index, array) {
    return currentItem > 3;
});
console.log(`filter(): ${showFilter}`); // 4, 5

// Every()
// In this example, we don't need the index and array parameters.
// This will check every current index and if one of them don't fulfil the condition, it will return false.
/**
 * The every() method calls a provided callbackFn function once for each element in the array, until the 
 * callbackFn returns a falsy value. 
 * 
 * If such an element is found, every() immediately returns false and stops iterating through the array. 
 * Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.
 */

let showEvery = randomNumbers.every(function (currentItem) {
    return currentItem <= 5;
});
// This returns true because every number is less or equals to 5
console.log(`every(): ${showEvery}`); // true

// Some()
// In this example, we don't need the index and array parameters.
// It will not check every current index. It will just get one that is true.
/**
 * The some() method in JavaScript is used to test whether at least one element in the array passes 
 * the test implemented by the provided function. It returns true if, in the array, it finds an element 
 * for which the provided function returns true; otherwise, it returns false.
 */

let showSome = randomNumbers.some(function (currentItem) {
    return currentItem > 4;
});
// This returns true because there is a number greater than 5. It will not check further as some conditions has been met.
console.log(`some(): ${showSome}`); // true

// Sort()
// This will sort the values by ascending order by default
/**
 * The sort() method in JavaScript is used to sort the elements of an array in place 
 * and returns the sorted array
 */
let sortedNames = ['Camilla', 'Abraham', 'Bobby'];
console.log("Sorted names: " + sortedNames.sort()); // Abraham, Bobby, Camilla

// You can name the parameters whatever you like such as a,b
// If you use the minus sign, this will show the ascending order or descending order depending on the parameter
let showSortAscending = randomNumbers.sort(function (a, b) {
    return a - b;
});
console.log(`sort() asc: ${showSortAscending}`); //1,2,3,4,5

// Sort in descending order
let showSortDescending = randomNumbers.sort(function (a, b) {
    return b - a;
});
console.log(`sort() desc: ${showSortDescending}`); //1,2,3,4,5

// Reduce()
// Reduces it to a single digit
// The syntax for reduce method is: array.reduce(function(total, currentValue, index, array){ ... }, initialValue);
// The accumulator contains the value calculated from the previous iteration - in this case, 5, and the currentValue is the current element being processed.
let showReduce = randomNumbers.reduce(function (accumulator, currentItem) {
    return accumulator + currentItem;
}, 5)

// This will be 20 because 5 + 4 + 3 + 2 + 1 = 15. With the initial value of 5, we got 20 in total.
console.log(`reduce(): ${showReduce}`); // 20

// forEach()
// This will return each values of the index
randomNumbers.forEach(function (currentItem) {
    console.log(currentItem);
});