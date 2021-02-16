randNumber = Math.floor(Math.random()*100);
var userGuess= prompt("Guess a number between 1 and 100.");
counter = 0

//user guesses are wrong.
while (userGuess != randNumber){
    if (userGuess > randNumber){
        counter++;
        userGuess = prompt("Your number is higher than the random number. Guess a number between 1 and 100.");
    }
    else if (userGuess < randNumber){
        counter++;
        userGuess = prompt("Your number is lower than the random number. Guess a number between 1 and 100.");
    }
};
//checks if the user guesses right after broken out of while loop. 
if (userGuess == randNumber){
    console.log(`The number is ${randNumber} and you took ${counter} guesses`);
};