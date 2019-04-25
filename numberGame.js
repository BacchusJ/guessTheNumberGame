$(document).ready(function() {


// Challenge 1: Creating a random number.

  function generateRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}



// Challenge 2: Assigning a variable.

  let ranNum = generateRandomNumber();
  console.log(ranNum)



// Challenge 3: Using if/else and value comparison

  function checkGuess(guess) {

    // Write your code here
    if (guess == ranNum) {
      alert("You are correct");
       }
    else{
      alert("Keep on trying");
    }


  }
