// Business Logic
// Variable for constanants. Excludes q and y for the purposes of this program
var consonants = ["B", "b", "C", "c", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "P", "p", "R", "r", "S", "s", "T", "t", "V", "v", "W", "w", "X", "x", "Z", "z"];
// Variable containing vowels
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

var wordArray = function(sentence){
  var theArray = sentence.split(" ");
  return theArray;
}

var letterArray = function(sentence){
  var myArray = wordArray(sentence);
  // console.log(myArray);
  var outArray = [];
  myArray.forEach(function(word) {
    myArray = [word.split("")];
    outArray.push(myArray);
  });
  console.log(outArray);
  return outArray;
}


// Front End Logic
$(document).ready(function(event) {

  $("#pig-form").submit(function(event){
    event.preventDefault();
    var pigInput = $("#pig-input").val();

    letterArray(pigInput);

  });
});
