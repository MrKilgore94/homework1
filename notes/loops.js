//~~~~~~~~~~~~~~~~~~~~~~~~~Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// different kinds of loops in JS

// for loop
console.log('to 10')
for(let i =0; i<=10; i++){
  console.log(i)
}
//--------------------------------------------------------------------------------

console.log('from 10')
for(let i =10; i>0; i--){
  console.log(i)
}
//--------------------------------------------------------------------------------

console.log('by 2s')
for(let i = 0; i <=10; i+=2){
  console.log(i)
}
//--------------------------------------------------------------------------------

console.log("is even or odd")
for(let i = 0; i <=20; i++){
  if( i % 2 === 0){
    console.log(`${i} is even`)
  } else{
    console.log(`${i} is odd`)
  }
}
//--------------------------------------------------------------------------------


//~~~~~~~~~~~~~~infinite loop~~~~~~~~~~~~~~~~~

//console.log('infinite loop')
//for(let i =10; i>=0; i++){
  //console.log(i)
//}
//~~~~~~~~~~~~~~infinite loop~~~~~~~~~~~~~~~~~



//--------------------------------------------------------------------------------


//while loop

while (i < 10) {
  text += "The number is " + i;
  i++;
}


let i = 0
while(i<=10){
  if(i === 5){
    i++
    continue;
  
  }
  console.log('i:', i)
  i++
} 
//--------------------------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let evenNumbers = numbers.filter(function(item) {
   return (item % 2 == 0);
});

console.log(evenNumbers);
//--------------------------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let oddNumbers = numbers.filter(function(item) {
   return (item % 2 !== 0);
});

console.log(oddNumbers);


//--------------------------------------------------------------------------------



for (var x = 0; x <= 15; x++){
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
const evenOrOdd = (num)=>{
  if(num % 2 === 0){
      return 'even'
  }else{
      return 'odd'
  }
}

const isOdd = (num) =>{
  return num % 2 === 0
}

if(isOdd(2)){
  console.log('is Odd')
} else {
  console.log('is Even')
}



//--------------------------------------------------------------------------------

for (let i=1; i<=5; i++) {
  console.log("Hello, The current number is: " + i);
}

for (let i=5; i>=1; i--){
  console.log('Hello, The current number is: ' + i);
}

//--------------------------------------------------------------------------------

