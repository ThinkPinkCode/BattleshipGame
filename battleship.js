
var model = {
    boardSize: 49,
    boardWidth: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,


    ships: [
        {locations: ["00", "01", "02"], hits: []},
        {locations: ["06", "13", "20"], hits: []},
        {locations: ["47", "48", "49"], hits: []}

    ],

    fire: function (guess) {

        for (var i = 0; i < this.numShips; i++) {

            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

            if (ship.hits[index] === "hit"){
                view.displayMessage("oops, you already hit that location!");
                return true;
            } else if (index >= 0){
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }

                return true;
            }

        }

        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },


    isSunk: function (ship) {
        for (var i =0; i < this.shipLength; i++){
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};


// ----------------- VIEW ------------------------
var view = {
    displayMessage: function (message) {

        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = message;
    },

    displayHit: function (location) {
        var squareId = document.getElementById(location);
        squareId.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        var squareId = document.getElementById(location);
        squareId.setAttribute("class", "miss");

    }
};


// ----------------- CONTROLLER ------------------------

var controller = {
    guesses: 0,

    processGuess: function (guess) {
        console.log("begin guesses: " + this.guesses);

        var location = parseGuess(guess);

        console.log("Parsed location: " + location);
        if (location) {
            this.guesses++;

            console.log("incremented guesses: " + this.guesses);
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses")
            }

        }
    }

};


function parseGuess(guess) {

    var validFirstChar = ["a", "b", "c", "d", "e", "f", "g"];

    if (guess === null || guess.length !== 2) {
        alert("Invalid guess. Please enter a letter and a number on the board");
        console.log("invalid guess");
    }
    else {
        var firstChar = guess.charAt(0);
        var row = validFirstChar.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || 0 > column > model.boardWidth) {
            alert("oops, that isn't on the board");
            console.log("not on board");
        }

        else {
            console.log("parseGuess return:" + row + column);
            return row + column;
        }
    }
    console.log("parseGuess return null");
    return null;

}

function handleFireButton() {

    var guessInput = document.getElementById("guessInput");
    console.log("guessInput: " + guessInput);
    var guess = guessInput.value.toLowerCase();
    console.log("guess: " + guess);


    controller.processGuess(guess);

    //guessInput.value = "";

}

function handleKeyPress(e){
    var fireButton = document.getElementById("fireButton");

    if (e.keyCode === 13){
        fireButton.click();
        return false;
    }
}

window.onload = init;

function init(){
    console.log("init ran");
    var fireButton = document.getElementById("fireButton");
    fireButton.onClick = handleFireButton;

    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

}

controller.processGuess("a3");
controller.processGuess("a1");
controller.processGuess("a0");
controller.processGuess("a2");
controller.processGuess("b3");
controller.processGuess("d3");
controller.processGuess("g3");
controller.processGuess("b4");
controller.processGuess("b6");
controller.processGuess("d2");


//GET AND PROCESS PLAYER'S GUESS


// KEEP TRACK OF # OF GUESSES
// ASK MODEL TO UPDATE ITSELF BASED ON LATEST GUESS
// DETERMINE WHEN THE GAME IS OVER


// ----------------- TESTING ------------------------
// model.fire(2);
// model.fire(7);
// model.fire(0);
// model.fire(1);
// console.log("ships sunk :" + model.shipsSunk);
//
// controller.processGuess("a0");
// controller.processGuess("b0");
// controller.processGuess("a1");
// controller.processGuess("a2");

