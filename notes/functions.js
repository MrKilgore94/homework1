//~~~~~~~~~~~functions~~~~~~~~~~~~~~~~~~~~

// small programs -very simple, do one thing

//declace the function once
function sayHello(){
  //do stuff
  console.log('Hello')
}
//--------------------------------------------------------------------------------


//invoke or call the funtion n times

sayHello()
sayHello()
sayHello()
//--------------------------------------------------------------------------------



// arrow syntax, new with ES6
const sayHola = ()=>{
  console.log('Hola')
}

sayHola()
//--------------------------------------------------------------------------------



//defineing functioon with param
//param is a variable that is only visable to the function
function introducePerson(person){
  console.log(`Hello ${person}`)

}
//--------------------------------------------------------------------------------



//pass function an argument (person)^^
introducePerson('jon')
introducePerson('jill')

function add(num1, num2){
  return num1 + num2

}

console.log(add(1,1)) 


//--------------------------------------------------------------------------------
// arrow function
const getSum = (nums) => {
  let sum = 0
  for(var i = 0; i < nums.length; i++){
    sum += nums[i]
  }
  return sum
};

let sum1 = getSum([1,2,3,4]) // 10
let sum2 =getSum([1,2,3]) // 6

console.log(sum1)
console.log(sum2)
//--------------------------------------------------------------------------------


let sum = 0
// creating an array 'object' behind scenes
let numbers = [1,2,3,4]
console.log(numbers) //[1,2,3,4]
// expecting numbers to be an array of numbers
// this numbers parameter is scoped to the function
// overriding the variable
function getSum1(numbers){
    // console.log('here')
    // console.log(numbers)
    numbers.forEach((number)=>{
        sum += number
    })
    return sum
}
let s1 = getSum1([1,2,3,4])
let s2 = getSum1(numbers)
console.log(s1 )
console.log(s1 + s2)