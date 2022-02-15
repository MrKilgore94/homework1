// different kinds of loops in JS

// for loop
console.log('to 10')
for(let i =0; i<=10; i++){
  console.log(i)
}
console.log('from 10')
for(let i =10; i>0; i--){
  console.log(i)
}
console.log('by 2s')
for(let i = 0; i <=10; i+=2){
  console.log(i)
}

console.log("is even or odd")
for(let i = 0; i <=20; i++){
  if( i % 2 === 0){
    console.log(`${i} is even`)
  } else{
    console.log(`${i} is odd`)
  }
}

//console.log('infinite loop')
//for(let i =10; i>=0; i++){
  //console.log(i)
//}
// arrays
// 0, 1, 2, 3, 4
//arr.length
console.log('Array ex')
let arr = ['a', 'b', 'c', 'd', 'e', 'f']

for(let i = 0; i< 4; i++){
  console.log(arr[i])
}


// dont use for loops to loop over an array
//use array methods
arr.forEach((char)=>{
  console.log(char)
})




//while loop
let i = 0
while(i<=10){
  if(i === 5){
    i++
    continue;
  
  }
  console.log('i:', i)
  i++
}