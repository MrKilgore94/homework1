//~~~~~~~~~~~~~~~~~~~~data types~~~~~~~~~~~~~~~~~~~~~~~~~~~

// string 
let firstName = "Java";
let lastName = 'Script'; 
//--------------------------------------------------------------------------------


// number
let age = 25;
let id = 1;
//--------------------------------------------------------------------------------


// boolean
let isDone = true;
let isMarried = false; 
//--------------------------------------------------------------------------------


// undefined
let firstName;
let country; 
//--------------------------------------------------------------------------------


// null
let firstName = null;
let id = null;
//--------------------------------------------------------------------------------


// use typeof to find data type of variables
// Strings
alert(typeof "Hello"); // "string"
alert(typeof '12'); // "string"
//--------------------------------------------------------------------------------


// Numbers
console.log(typeof(100)); // "number"
console.log(typeof(100.29)); // "number"
//--------------------------------------------------------------------------------


// Booleans
alert(typeof true); // "boolean"
alert(typeof(1 == 2)); // "boolean"
//--------------------------------------------------------------------------------


// Undefined
console.log(typeof undefined); // "undefined"


let init;
console.log('type of init: ' + typeof init); // "undefined"
//--------------------------------------------------------------------------------


// Null
console.log(typeof null); // "object"
let initObject = null;
console.log('type of initObject: ' + typeof initObject);  // "object"
//--------------------------------------------------------------------------------


// Objects
alert(typeof {name: 'Dinanath', age: 35}); // "object"
alert(typeof document); // "object"
alert(typeof window); // "object"
//--------------------------------------------------------------------------------


// Arrays
let techArray = [];
console.log('type of techArray: ' + typeof techArray);  // "object"
console.log(typeof ['JavaScript', 'jQuery', 'Angular']);  // "object"
console.log(typeof ['Dinanath', 35, 'India']);  // "object"
//--------------------------------------------------------------------------------


// Functions
console.log(typeof function(){}); // "function"
console.log(typeof alert); // "function"
console.log(typeof window.alert); // "function"
//--------------------------------------------------------------------------------


// Symbol
alert(typeof Symbol("dob")); // "symbol"
//--------------------------------------------------------------------------------


//Number to Sting conversion
let num1 = 100;

console.log(num1);
console.log(typeof num1);
//console.log(num1.length); // error as number type variables do not have length

num1 = String(num1);

console.log(num1);
console.log(typeof num1);
console.log(num1.length);
//--------------------------------------------------------------------------------


//boolean to string conversion
let boolValue1 = String(false);

console.log(boolValue1);
console.log(typeof boolValue1);
//--------------------------------------------------------------------------------


// date to string conversion
let curDate = String(new Date());

console.log = (curDate);
console.log(typeof curDate);
//--------------------------------------------------------------------------------


// Array to String conversion
let numArray = String([1,2,3,4,5]);


console.log(numArray);
console.log(typeof numArray);
//--------------------------------------------------------------------------------


// toString() method
let curString = (1000).toString
let curString = (true).toString
//--------------------------------------------------------------------------------


//  String to Number conversion

let num2 = '100';

console.log(num2);
console.log(typeof num2);
console.log(num2.toFixed(2)); //helps to fix decimals - error as string type variables does not have any properties or methods related to number

num2 = Number(num2);

console.log(num2);
console.log(typeof num2);
console.log(num2.toFixed(2));
//--------------------------------------------------------------------------------


// Boolean to Number conversion
let boolValue2 = Number(false);
//--------------------------------------------------------------------------------


// parseInt() method

let curNumber = parseInt('100');
let curNumber = parseFloat('100.41'); 