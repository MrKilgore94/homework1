//~~~~~~~~~~~~~~~~~~~~condition~~~~~~~~~~~~~~~~~~~~~~~

let bob = {name: 'bob', age: 21, hasFelony:true}
let jill = {name: 'jill', age: 11, hasFelony:false}
let jane = {name: 'jane', age: 32, hasFelony:false}

if(age > 18){
  console.log('canvote')
  } else{
    console.log('cannot vote')
  }

//--------------------------------------------------------------------------------

//this gets messy

  if(bob.age >= 18 && !bob.hasFelony){
    console.log(`${jon.name} can vote`)
    } else{
      console.log(`${jon.name} cannot vote`)
    }
    
//--------------------------------------------------------------------------------

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


// variables, let, const, var
// for let(new prefered) and var are the same (there are differences)
// const is variable that can't change


let age = 21
let names = ['tony', 'liz']
let bob = { name:'Bob', age:21, hasFelony:false}
let jon = { name:'Jon', age:21, hasFelony:true}
let sally = { name:'Sally', age:17, hasFelony:false}


// conditions
if(jon.age >= 18 && !jon.hasFelony){
    console.log(`${jon.name} can vote`)
} else{
    console.log(`${jon.name} can not vote`)
}

if(bob.age >= 18 && !bob.hasFelony){
    console.log(`${bob.name} can vote`)
} else{
    console.log(`${bob.name} can not vote`)
}


// this i am expecting person to be an
// object {name:string,age:number,hasFelony:boolean}
function canVote(person){
    if(person.age >= 18 && !person.hasFelony){
        console.log(`${person.name} can vote`)
    } else{
        console.log(`${person.name} can not vote`)
    }
}

canVote(bob)
canVote(jon)
canVote(sally)


//--------------------------------------------------------------------------------

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
 