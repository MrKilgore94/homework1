//~~~~~~~~~~~~~~~~~~~~~~~~~Variables~~~~~~~~~~~~~~~~~~~~~~~~

// let, const, var
// let(prefered) and var are very similar
//const dosent change



// Declaring Variables
let techName;
let version;
let isDone;

// Assigning value
techName = "JavaScript";
version = 6;
isDone = true;

console.log("Learning " + techName + version);

// ------------------------------

// Declaring Variable
let userName;

// Assigning value
userName = "Austin";

console.log("Welcome " + userName);
let _firstName = "JavaScript";
let $version = 6;
let $num_total1 = 10;

console.log(
  "variables details: " + _firstName + " " + $version + " " + $num_total1
);

//traditional var syntax
var techName1 = 'JavaScript';

for(var i = 1; i <=5; i++) {
  console.log('i : ' + i); //1,2,3,4,5
  console.log('inside block:' + techName1);
  var version1 = 100
}
console.log('outside: ' + i);
console.log('outside: ' + version1);

//--------------------------

//ES6 syntax
let techName2 = 'LiveScript';

for(let n = 1; n <= 5; n++) {
  console.log('outside: ' + i);
  console.log('inside block: ' + techName2);
  let version2 = 100; 
}

// traditional var syntax
var PI1 = 3.14;
console.log(PI1); // 3.14

PI1 = 100;
console.log(PI1); // 100

// ------------------------------

// ES6 syntax
const PI2 = 6.28;
console.log('ES6 syntax const: ' + PI2); // 6.28

//PI2 = 100; // error 