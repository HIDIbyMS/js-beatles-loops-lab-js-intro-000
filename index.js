// add solution here

var empty = [];

// for loop
function theBeatlesPlay(musicians, instruments) {
 for (let i = 0; i < musicians.length; i++){
   empty.push(musicians[i] + " plays " + instruments[i]);
 }
  return empty;
}



// while loop
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    i++;
   console.log(facts[i] +"!!!");
  } 
}




// do while loop
 var array = [];
function iLoveTheBeatles(num) {
  var i = 0;
  do {
    array.push('I love the Beatles!');
    i++;
  } while (i < 17);
  return array;
}