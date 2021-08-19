// find the first Recurring character.

const inputChar = "ABCD";
let changeToArray = inputChar.split("");

function _hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}

console.log(_hash(changeToArray));
// console.log(changeToArray);
