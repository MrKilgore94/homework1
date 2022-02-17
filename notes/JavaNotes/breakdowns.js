//~~~~~~~~~~~~~~~~Breakdowns~~~~~~~~~~~~~~~~~~~~

call-back-array.arrayfunction((pramA, pramB)=>{
  if(paramA.call-back-to-string > paramB.call-back-to-string){
    return 1
  }
  if(paramA.call-back-to-string > paramB.call-back-to-string){
    return -1
  }
  return 0
})
console.log(call-back-array)

//~~~~~~~~~~~~~~~~^^^ SAME vvv~~~~~~~~~~~~~~~~~~~~\\

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





//--------------------------------------------------------------------------------



//declaring variables, assigning array of numbers

// variable  array
let array-callback = [2,3,4,5,6]
 //same as putting\\  
let x = [2,3,4,5,6]



declaration new-call-back = array-callback.arrayfunction((accumlative, number)=>{
  console.log('label:', accumlative)
  console.log('label:', number)
  return accumlative + number

},0)
//^ value set to 0
console.log(new-call-back)


let sum = nums.reduce((accum, num)=>{
  console.log('accum:', accum)
  console.log('num:', num)
  return accum + num
},0)
console.log('return of reduce')
console.log(sum)




//--------------------------------------------------------------------------------

//const wont change
//     v-name givin to array
const characters = [
  {
      name: 'Luke Skywalker', //
      height: 172,            //
      mass: 177,              // string inside of array
      eye_color: 'blue',      //
      gender: 'male',         //
  },
  {
      name:                   //
      height:                 //
      mass:                   // call back name in string
      eye_color:              //
      gender:                 //
  },
  {
    'Luke Skywalker'          //
    172                       //
    177                       // keys inside of string
    'blue'                    //
    'male'                    //
},
