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
