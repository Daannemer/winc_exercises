let numberToGuess = null;
let yourName;
let yourGuess;
const min = 0;
let max = 25;

while (yourName === undefined || yourName === null || yourName.length === 0) {
    yourName = prompt("What's your name?");
}

alert("Hi " + yourName + ", welcome to the Guess the Number game " + "!");

numberToGuess = Math.floor(Math.random() * (max - min)) + min;

console.log(numberToGuess);

yourGuess = parseInt(prompt("Please enter a number between 0 and 25"));

alert("Your guess is " + yourGuess);

while (yourGuess !== numberToGuess) {
    alert("Wrong, guess again");
    yourGuess = parseInt(prompt("Please enter a number"));
}

if (yourGuess == numberToGuess) {
    alert("Correct, you've won! The number was " + yourGuess + " indeed!");
    alert("Bye " + yourName + "! Until we meet again!");
}
