// Number
var number = 100;
console.log("This is type is: " + typeof number);

// Big Int
var bigNumber = 10n;
console.log("This is type is: " + typeof bigNumber);

// string
var name = "Richard";
console.log("This is type is: " + typeof name);

// boolean
var isOkay = true;
console.log("This is type is: " + typeof isOkay);

// undefined
var unknown;
console.log("This is type is: " + typeof unknown);

//Object
var object = {};
console.log("This is type is: " + typeof object);

//Array
var array = [];
console.log("This is type is: " + typeof array);

//Symbol
var symbol = Symbol(3);
console.log("This is type is: " + typeof symbol);

//Null
var nothing = 100;
nothing = null;
console.log("This is type is: " + typeof nothing);

//String(), Boolean() are constructors
console.log("This is type is: " + typeof new String("Hello!"));