// ~~~~~~~~~~~Loops~~~~~~~~~~~~~~~

// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var evenNumbers = numbers.filter(function(item) {
   return (item % 2 == 0);
});

console.log(evenNumbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var oddNumbers = numbers.filter(function(item) {
   return (item % 2 !== 0);
});

console.log(oddNumbers);

//--------------------------------------------------------------------------------

// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
for (let i=20; i>=1; i--) {
  console.log(i);
}

//--------------------------------------------------------------------------------

// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
for (var x = 0; x <= 20; x++){
  if (x === 0){
    console.log(x + " is even");
  }
  else if (x % 2 === 0){
    console.log(x + " is even");
  }
  else {
    console.log(x + " is odd");
  }
}
//--------------------------------------------------------------------------------


let nums = [1,2,3,4,5,6,7,8,9,10]

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
for (let i=1; i<=20; i++) {
  console.log(i);
}

//--------------------------------------------------------------------------------
// 5. Look closely at the code below

const isOdd = (num) =>{
    return num % 2 === 0
}

if(isOdd(2)){
    console.log('is Odd')
} else {
    console.log('is Even')
}

// 6. what will this log?
// 7. what is the value of isOdd(2) 
// 8. Fix the isOdd function to make this work

// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
// 2. Write a function that takes an array and returns the sum of all the numbers
// 3. Write a function that returns the number of vowels in string
// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
// 7. write a function that takes an array that removes the first and last items and return that new array
// 8. write a function that swaps the last and first items of an array 
// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
// 11. Write a function that prints all  numbers from 0 – 10
