// small programs -very simple, do one thing

//declace the function once
function sayHello(){
  //do stuff
  console.log('Hello')
}

//invoke or call the funtion n times

sayHello()
sayHello()
sayHello()

// arrow syntax, new with ES6
const sayHola = ()=>{
  console.log('Hola')
}

sayHola()


//defineing functioon with param
//param is a variable that is only visable to the function
function introducePerson(person){
  console.log(`Hello ${person}`)

}


//pass function an argument (person)^^
introducePerson('jon')
introducePerson('jill')