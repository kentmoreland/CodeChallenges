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
