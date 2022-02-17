//~~~~~~~~~~~~~~~~~~~~~General Notes~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// name, age, dob, eye color, friends, weight, income

// Primitive (Primary or Value) data type

// String
// Number
// Boolean
// Undefined
// Null

// string - sequence of characters
// '', "", ``
let string1 = "asdfasdf";
//--------------------------------------------------------------------------------


//string interpolation
let bt = `1+1  = ${1 + 1}`;
console.log(bt);

console.log(typeof string1);
//--------------------------------------------------------------------------------


// Number
let age = 21;

console.log(typeof age);
console.log(typeof 21.0);

let dob = "6/27/1983";
console.log(typeof dob);
//--------------------------------------------------------------------------------


// other types in js
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

console.log(typeof true);
console.log(typeof false);
//--------------------------------------------------------------------------------


// Arrays - index at 0 lists
const people = ["John", "Jill", "Joe"];

console.log(people);
console.log(people[0]);
console.log(people[2]);
//--------------------------------------------------------------------------------


// Objects - key value pairstore
let person = {
  name: "Tony",
  age: 21,
};

console.log(person.name);
console.log(person.age);

// if(condition){
//     //run if condition is truthy 
// }

// if(condition){
//     //run if condition is truthy 
// } else {
//       //run if condition is falsey  
// }

// if(condition1){
//     //run if condition1 is truthy 
// } else if(condition1)
//     run if condition is truthy 
// else {
//       //run if condition is falsey  
// }


//--------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~Stop light demo~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let lightColor = 'red'


// IF
if(lightColor === 'green'){
    console.log('go')
} 

//IF ELSE
if(lightColor === 'green'){
    console.log('go')
} else{
    console.log('stop')
}


lightColor = 'yellow'
let safeToCross = true
// IF ELSE IF
if(lightColor === 'green'){
    console.log('go')
} else if(lightColor ==='yellow'){
    if(safeToCross){
      console.log('go but speed up')
    }else {
      console.log('hit brakes rapidly')
    }
} else{
    console.log('gradually stop')
}

 
if((lightColor === 'green' || lightColor === 'yellow') && safeToCross){
    console.log('go')
} else {
    console.log('stop')
}


//--------------------------------------------------------------------------------

// falsey values
if(0){
  console.log('0 is truthy')
}  else {
  console.log('0 is falsey')
} 

// falsey values
if(false){
  console.log('false is truthy')
}  else {
  console.log('false is falsey')
} 

if(null){
  console.log('null is truthy')
}  else {
  console.log('null is falsey')
}

if(''){
  console.log('empty string is truthy')
}  else {
  console.log('empty string  is falsey')
} 

if(NaN){
  console.log('NaN is truthy')
}  else {
  console.log('NaN is falsey')
} 
if(undefined){
  console.log('undefined is truthy')
}  else {
  console.log('undefined is falsey')
}

if('asdf'){
  console.log('truthy')
}

if([]){
  console.log('truthy')
}
if({}){
  console.log('truthy')
}

if(-234){
  console.log('-234 is truthy')
  
} 


//--------------------------------------------------------------------------------



