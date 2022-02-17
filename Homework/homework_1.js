// ~~~~~~~~~~~Loops~~~~~~~~~~~~~~~
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~')


// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 1~~~~~~~~~~~~~~~~~~~~~~~~~~~')

for(let i = 0; i <=10; i++){
  if( i % 2 === 0){
  console.log(`${i} is even`)
  }  
}

//--------------------------------------------------------------------------------

// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 2~~~~~~~~~~~~~~~~~~~~~~~~~~~')

for (let i=20; i>=1; i--) {
  console.log(i);
}

//--------------------------------------------------------------------------------

// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 3~~~~~~~~~~~~~~~~~~~~~~~~~~~')

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




// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 4~~~~~~~~~~~~~~~~~~~~~~~~~~~')


let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}
//--------------------------------------------------------------------------------

// 5. Look closely at the code below
// 6. what will this log? 
// 7. what is the value of isOdd(2) 
// 8. Fix the isOdd function to make this work
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Questions 5,6,7,8~~~~~~~~~~~~~~~~~~~~~~~~~~~')



const isOdd = (num) =>{
  return num % 2 === 0
}

if(isOdd(num ='3648392')){
  console.log(num + ' is Even')
} else {
  console.log(num + ' is Odd')
}
//--------------------------------------------------------------------------------
// ~~~~~~~Functions~~~~~~~~~
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~')


// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 1~~~~~~~~~~~~~~~~~~~~~~~~~~~')



const printUpTo = (num)=>{
  for(let i = 0; i<= num; i++){
      if(i %2 == 0){
      console.log(i)
      }
  }
}
console.log('---')
printUpTo(30)


//--------------------------------------------------------------------------------

// 2. Write a function that takes an array and returns the sum of all the numbers
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 2~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const array = [1, 3, 5, 6, 9];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
//--------------------------------------------------------------------------------

// 3. Write a function that returns the number of vowels in string
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 3~~~~~~~~~~~~~~~~~~~~~~~~~~~')

var s = "How many vowels are in this sentence";

let count2 = s.split('').filter( char => /[aeiou]/i.test(char) ).length;

console.log("How many vowels are in this sentence " + count2)
//--------------------------------------------------------------------------------

// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 4~~~~~~~~~~~~~~~~~~~~~~~~~~~')




//--------------------------------------------------------------------------------

// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 5~~~~~~~~~~~~~~~~~~~~~~~~~~~')



//--------------------------------------------------------------------------------

// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 6~~~~~~~~~~~~~~~~~~~~~~~~~~~')



let frank = {name: "Frank Castle", age: 40};
let john = {name: "John Wick", age: 44};
let ellen = {name: "Ellen Ripley",age: 26};
let lara = {name: "Lara Croft", age: 25};

console.log(frank.name + " is " + frank.age + " years old!");
console.log(john.name + " is " + john.age + " years old!");
console.log(ellen.name + " is " + ellen.age + " years old!");
console.log(lara.name + " is " + lara.age + " years old!");






//--------------------------------------------------------------------------------

// 7. write a function that takes an array that removes the first and last items and return that new array
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 7~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let remove1 = (arr)=>{
  const cloneArr = [...arr]
  shift(cloneArr)
  return cloneArr
}

let remove2 = (arr)=>{
  const cloneArr = [...arr]
  pop(cloneArr)
  return cloneArr
}

let nums = [2,3,4,5]
let swapedNums = swap1(nums)
console.log('nums: ', nums)
console.log('swapedNums: ', swapedNums)


//--------------------------------------------------------------------------------

// 8. write a function that swaps the last and first items of an array 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 8~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const swap1 = (arr)=>{
  const cloneArr = [...arr]
  swap(cloneArr)
  return cloneArr
}

let nums = [2,3,4,5]
let swapedNums = swap1(nums)
console.log('nums: ', nums)
console.log('swapedNums: ', swapedNums)



//--------------------------------------------------------------------------------

// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 9~~~~~~~~~~~~~~~~~~~~~~~~~~~')



//--------------------------------------------------------------------------------

// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 10~~~~~~~~~~~~~~~~~~~~~~~~~~~')



//--------------------------------------------------------------------------------

// 11. Write a function that prints all  numbers from 0 – 10
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 11~~~~~~~~~~~~~~~~~~~~~~~~~~~')


const UpTo10 = (num)=>{
  for(let i = 0; i<= num; i++){
      console.log(i)
      }
  }

UpTo10(10)

//--------------------------------------------------------------------------------

