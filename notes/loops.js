for (let i=1; i<=5; i++) {
  console.log("Hello, The current number is: " + i);
}

for (let i=5; i>=1; i--){
  console.log('Hello, The current number is: ' + i);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var evenNumbers = numbers.filter(function(item) {
   return (item % 2 == 0);
});

console.log(evenNumbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var oddNumbers = numbers.filter(function(item) {
   return (item % 2 !== 0);
});

console.log(oddNumbers);

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

const arr1 = [1, 2, 3, 4, 5]

size1 = arr1.length;

document.write("Array 1: <br>");

printArray(arr1, size1);

document.write("Sum of elements of the array: " + findSum(arr1, size1) + "<br>");

const arr2 = [34, 56, 10, -2, 5, 99]

size2 = arr2.length;

document.write("Array 2: <br>");

printArray(arr2, size2);
