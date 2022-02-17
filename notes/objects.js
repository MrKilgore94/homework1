//~~~~~~~~~~~~~~~~~~~Objects~~~~~~~~~~~~~~~~~~~~~~`

// objects are key value pairstore
//kind of like describing a person

//                           "key"                             "key"
let dict = {apple: 'a thing that grows on a tree', zebra: 'a striped animal'} 


// keys          "key"     "key"
let bob = {name: 'bob', age:21}
let jill = {name: 'Jill', age: 24}
//--------------------------------------------------------------------------------


//adding another key
bob.eyeColor = 'Blue'
//--------------------------------------------------------------------------------


//access key
console.log(bob.name)
console.log(bob.age)

let people = [bob, jill]
console.log(people[1].name)
 