/*
Reverse String using Javascript
*/

let words = "Rekomendasi rumah liburan untuk Anda";
// let words = "Adna Kutnu Narubil Hamur Isadnemoker";

var changeToLowerCase = words.trim().toLocaleLowerCase();
const results = reverseWord(changeToLowerCase);

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

console.log(titleCase(results));

// reverse without built-in javascript function
function reverseWord(str) {
  let myReverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    myReverseStr += str[i];
  }
  return myReverseStr;
}
