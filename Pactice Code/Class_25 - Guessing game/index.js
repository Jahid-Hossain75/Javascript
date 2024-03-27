
// Guessing Game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// if the guess number matches random number; then show message won else lost
// Run the game for 5 times
// show the number of wons and losts


var numberOfWon = 0;
var numberOfLost = 0;

for(var i=1; i <= 5; i++){
    var guessing_number = parseInt(prompt("Enter Guess number from 1 to 5: "));
    var random_number = Math.floor(Math.random()*5) + 1;

    if(guessing_number == random_number){
        console.log("You have won");
        numberOfWon++;
    }else{
        console.log("You have lost, Random number was "+random_number);
        numberOfLost++;
    }
}

document.write("Total Number of Won = "+ numberOfWon + "<br>");
document.write("Total Number of Lost = "+ numberOfLost + "<br>");