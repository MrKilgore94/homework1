//~~~~~~~~~~~~~~~~~~~~~~~Arrays~~~~~~~~~~~~~~~~~~

//Arrays - lists - []
//          array index
//          0,1,2,3,4
let nums = [1,2,3,4,5]

//--------------------------------------------------------------------------------


// array within an array
let nestedArray = [[1,2,3],[9,7,6]]

//--------------------------------------------------------------------------------


//acssesing item in an array by index, array starts at 0 //see above^

console.log(nums[2]) // grabs '3' 
console.log(nestedArray[1]) // grabs '9,7,6' 
console.log(nestedArray[1][2]) // grabs '6' 

console.log(nums.length) //length of the array - 6

//--------------------------------------------------------------------------------

//grab first item in array
console.log(nums[0])

//--------------------------------------------------------------------------------

// grab last item in array
console.log(nums[nums.length - 1])

//--------------------------------------------------------------------------------

// add item to array
nums.push('')

//--------------------------------------------------------------------------------

// remove last item
nums.pop()

//--------------------------------------------------------------------------------

// add item to first of array
nums.unshift()

//--------------------------------------------------------------------------------

// remove from start
nums.shift()

//--------------------------------------------------------------------------------

// looping over a arry

let names = ['Jon', 'Jill', 'Sally', 'Mike']

const sayHello = (person)=>{
  console.log(`Hello ${person}`)

}

console.log(sayHello(names[0]))
console.log(sayHello(names[1]))
console.log(sayHello(names[2]))

//--------------------------------------------------------------------------------

// iterate over array, forEach
names.forEach(sayHello)
 
