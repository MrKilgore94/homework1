const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 177,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];

// THESE ALL ARE METHODS ON ARRAYS
// ALL OF THESE METHODS PASS A FUNCTION TO
// THEY ARE GOING TO BE DIFFERENT WHAT THEY RETURN
// THEY ALL (EXCEPT) SORT DO NOT MUTATE THEY ARRAY THAT CALLED IT

//***FOREACH ***/
// GOES THROUGH EACH THING AND PERFORMS FUNCTION
// RETURNS UNDEFINED
let returnValueEach = characters.forEach((c)=>{
  console.log(c.name)
})
console.log('return of forEach')
console.log(returnValueEach) //


//***MAP*** 
// CHANGE AN ARRAY
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// THAT IT PERFORMS IT COLLECTS THE RETURN OF THAT IN
// A NEW ARRAY AN RETURNS THAT ARRAY
let returnValueMap = characters.map((c)=>{
  return {name: c.name, eye_color:c.eye_color}
})
console.log('return of map')
console.log(returnValueMap)




//1. Get array of all names
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 1.1~~~~~~~~~~~~~~~~~~~~~~~~~~~')
let name = characters.map((c)=>{
  return {name: c.name}
})

console.log(name)





//--------------------------------------------------------------------------------

//2. Get array of all heights
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 1.2~~~~~~~~~~~~~~~~~~~~~~~~~~~')
let height = characters.map((c)=>{
  return {height:c.height}
})

console.log(height)



//--------------------------------------------------------------------------------

//3. Get array of objects with just name and height properties
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 1.3~~~~~~~~~~~~~~~~~~~~~~~~~~~')
let nameHeight = characters.map((c)=>{
  return {name: c.name, height:c.height}
})

console.log(nameHeight)
//--------------------------------------------------------------------------------

//4. Get array of all first names
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 1.4~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let name1 = characters.map((c)=>{
  return {name: c.name.split(' ')[0]}
})

console.log(name1)



//--------------------------------------------------------------------------------

//***REDUCE***
//
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// THIS FUNCTION HAS TWO PARAM, THE RETURN VALUE OF THE PREVIOUS(ACCUM)
// FUNCTION AND CURRENT ITEM
// RETURN THE FINAL RETURN OF FUNCTION(ACUMM)
// THE TYPE IT CAN RETURN IS ANYTYPE
// let nums = [2,3,4,5,6]
// let sum = nums.reduce((accum, num)=>{
//   console.log('accum:', accum)
//   console.log('num:', num)
//   return accum + num
// },0)
// console.log('return of reduce')
// console.log(sum)

//1. Get total mass of all characters
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 2.1~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let sum1 = characters.reduce((accum, characterWeight)=>{
  console.log('the current weight is:', accum)
  console.log('plus:', characterWeight.mass)
  return accum + characterWeight.mass
},0)

console.log(`The total weight is ${sum1}!`)

//--------------------------------------------------------------------------------

//2. Get total height of all characters
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 2.2~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let sum2 = characters.reduce((accum, characterHeight)=>{
  console.log('num:', characterHeight.height)
  return accum + characterHeight.height
},0)

console.log(sum2 + ', that would be REALLY tall')


//--------------------------------------------------------------------------------

//3. Get total number of characters by eye color
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 2.3~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let c2 = characters.reduce((accum, char) =>{
  if(char.eye_color === 'brown'){
    accum.brown +=1
    return accum

  }
else if (char.eye_color === 'blue'){
  accum.blue +=1
  return accum
}
else if (char.eye_color === 'yellow'){
  accum.yellow +=1
  return accum
}
}, {brown:0, blue:0, yellow:0})

console.log(c2)


//--------------------------------------------------------------------------------

//4. Get total number of characters in all the character names
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 2.4~~~~~~~~~~~~~~~~~~~~~~~~~~~')

let characterNumber = characters.reduce((accum, c)=>{
  let numberChara = c.name.length-1
  return accum + numberChara
},0)

console.log(characterNumber)



//--------------------------------------------------------------------------------


//***FILTER***
// REMOVE ITEMS
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// IF THAT RETURNS TRUE IT PUSHES THE ITEM IN THE NEW ARRAY
// IF IT RETURNS FALSE IT DOESN'T
// A NEW FILTERED ARRAY AN RETURNS THAT ARRAY

let allOver100 = characters.filter((c)=>{
  return c.mass >= 100
})
console.log('return of filter')
console.log(allOver100)



//1. Get characters with mass greater than 100
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 3.1~~~~~~~~~~~~~~~~~~~~~~~~~~~')




//--------------------------------------------------------------------------------

//2. Get characters with height less than 200
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 3.2~~~~~~~~~~~~~~~~~~~~~~~~~~~')




//--------------------------------------------------------------------------------

//3. Get all male characters
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 3.3~~~~~~~~~~~~~~~~~~~~~~~~~~~')




//--------------------------------------------------------------------------------

//4. Get all female characters
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question 3.4~~~~~~~~~~~~~~~~~~~~~~~~~~~')




//--------------------------------------------------------------------------------


//***FIND***
// ONLY FIND ONE MATCH 
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// IF THAT RETURNS TRUE IT PUSHES THE ITEM IN THE NEW ARRAY
// IF IT RETURNS FALSE IT DOESN'T
// THE FIRST MATCH IT FINDS || UNDEFINED IF NO MATCH FOUND

let firstOver100 = characters.find((c)=>{
  return c.mass >= 100
})
console.log('return of find')
console.log(firstOver100)

//***SORT***
characters.sort((a,b)=>{
  if(a.name > b.name){
      return 1
  }
  if(a.name < b.name){
      return -1
  }
  return 0
})
console.log('return of sort')
console.log(characters)

//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***Bonus***/
//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?