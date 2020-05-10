
let words = ["bread", "wallet", "coin"];
let wordIndex = Math.floor(Math.random() * words.length);
let randomWord = words[wordIndex];
let userInput;
let guesses = [];
let guesses_left;
let correct_guesses;

$(document).ready(function() {
     buildHiddenWord();
     initialSetup();
     guessing();
});

function initialSetup(){
    guesses_left = randomWord.length * 2;
    correct_guesses = 0;
    document.getElementById("game_status").innerHTML =  "You have " + guesses_left + " guesses left";
}

function buildHiddenWord() {
    for (let i = 0; i < randomWord.length; i++) {
        $(".hidden-word").append("<span id='" + i + "'>_</span> &nbsp;&nbsp;");
    }
}

function guessing() {
    document.onkeyup = function(event) {
        userInput = event.key;
        validateInput(userInput);
        if (!isGameOver()){
            addToGuesses(userInput);
            updatePage();
        }
    };
}

function validateInput(letter) {
    console.log("Random word is: " + randomWord);
    
    for (let i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
            console.log("Letter found at location " + i);
            correct_guesses++;
            console.log("Correct Guesses in validateInput: " + correct_guesses);
            document.getElementById(i).innerHTML = randomWord[i];
        }
    }
}

function addToGuesses(guess) {
    guesses.push(guess);
}

function updatePage() {
    document.getElementById("main_message").innerHTML =  'You have guessed: ' + guesses.join();
    document.getElementById("game_status").innerHTML =  "You have " + guesses_left + " guesses left";
}

function isGameOver(){
    if (correct_guesses >= randomWord.length){
        document.getElementById("game_status").innerHTML =  "You have won!";
        return true;
    }
    if (--guesses_left  <= 0){
        document.getElementById("game_status").innerHTML =  "You have lost!";
        return true;
    } else {
        return false;
    }

}