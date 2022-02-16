//condition

// if(age > 18){
//   console.log('canvote')
//   } else{
//     console.log('cannot vote')
//   }

// //this gets messy

//   if(bob.age >= 18 && !bob.hasFelony){
//     console.log(`${jon.name} can vote`)
//     } else{
//       console.log(`${jon.name} cannot vote`)
//     }
    
let bob = {name: 'bob', age: 21, hasFelony:true}
let jill = {name: 'jill', age: 11, hasFelony:false}
let jane = {name: 'jane', age: 32, hasFelony:false}

//this is better
//person(object): {name:string, age:number, hasFelony:boolean}

function canVote(person){
if(person.age >= 18 && !person.hasFelony){
  console.log(`${person.name} can vote`)
  } else{
    console.log(`${person.name} cannot vote`)
  }
  
}

canVote(bob)
canVote(jill)
canVote(jane)



const aboutPerson = (person)=>{
  let felonyAbout;
  if(person.hasFelony){
      felonyAbout= 'has felony'
  } else{
      felonyAbout= 'does not have felony'
  }
  return `${person.name} is ${person.age} years old and ${felonyAbout}`
}
console.log('----- before aboutPerson')
let aboutSally = aboutPerson(sally)
console.log(aboutSally)
console.log('----- after aboutPerson')
