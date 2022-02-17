//~~~~~~~~~~~Swap~~~~~~~~~~~~~~~~


let array = [1,2,3,4]

// this function doesn't return anything
// it takes an array and changes that array
// this know side effect/mutation
// change the value a variable
const swap = (array)=>{
  // take first item move to last
  let firstItem = array[0]
  let lastItem = array[array.length-1]
  array[array.length-1] = firstItem
  // take last item move it to first
  array[0] = lastItem
}
console.log('array before swap:', array)
swap(array)
console.log('array after swap:', array)
//--------------------------------------------------------------------------------


// Mutation/side effect

// Many times mutations are bad and we dont want to change the value
// of a given variable
// does not have a side
const swap1 = (arr)=>{
    // copy array
    const cloneArr = [...arr]
    swap(cloneArr)
    return cloneArr
}

//--------------------------------------------------------------------------------