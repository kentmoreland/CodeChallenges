// Only Unique
// Given a string, remove any characters that are not unique from the string.

// Input: string
// Output: string with no dups
// Constraints/Complexity: none for time complexity
// Examples:
// 'x' => 'x'
// 'xx' => ''
// 'abccdefe' => 'abdf'

//           **** Pseudocode ****
//Create an object for sorting
//Create a result string
//for each item in the string do this
  //*add the item to the object
    //if the item doesn't exist in the object do this
      //add the item as a key and the and 0 as the value
    //if the item exists increment the value
//for each item in the object do this
  //if the value of the object key is 0 add to the result string

onlyUnique = (string) => {
  string = string.split('');
  let tally = string.reduce((object, letter)=>{
    object[letter] !== undefined ? object[letter]++ : object[letter] = 0;
    return object;
  }, {})
  return string.reduce((result, rletter)=>{
    tally[rletter] === 0 ? result += rletter : result;
    return result;
  }, '');
}



let string1 = 'abbc';
let string2 = 'abc';
let string3 = 'abccdefe';
let string4 = 'iiii';

console.log(onlyUnique(string1));
console.log(onlyUnique(string2));
console.log(onlyUnique(string3));
console.log(onlyUnique(string4));
