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
    array.push("I love the Beatles!");
    i++;
  } while (i < 8 || num == 17);
  return array;
}