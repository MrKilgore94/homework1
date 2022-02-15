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
console.log('by 2's')
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

//while loop